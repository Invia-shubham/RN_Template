import React, {createContext, useState, useContext, ReactNode} from 'react';

interface ErrorContextType {
  errorResponse: string | null;
  saveError: (error: any) => void;
  clearError: () => void;
}

type InnerError = {
  code: string;
  message: string;
  target?: string;
};

type ErrorDetail = {
  error_message?:
    | string
    | {
        code?: string;
        message: string;
        innererror?: InnerError;
      };
};

type ErrorResponse = {
  response: string;
  data: {
    message: string;
    errors: ErrorDetail[];
  };
};

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useErrorContext = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error(
      'useErrorContext must be used within an ErrorContextProvider',
    );
  }
  return context;
};

interface ErrorProviderProps {
  children: ReactNode;
}

export const ErrorContextProvider = ({children}: ErrorProviderProps) => {
  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  const extractErrorMessages = (errorResponse: ErrorResponse): string => {
    const messages: string[] = [];

    const extractMessage = (errorDetail: ErrorDetail) => {
      if (typeof errorDetail.error_message === 'string') {
        messages.push(errorDetail.error_message);
      } else {
        messages.push(errorDetail.error_message?.message);
        if (errorDetail?.error_message?.innererror) {
          messages.push(errorDetail?.error_message?.innererror?.message);
        }
      }
    };

    if (errorResponse.data && errorResponse.data.errors) {
      errorResponse.data.errors.forEach(extractMessage);
    } else {
      messages.push(JSON.stringify(errorResponse));
    }

    return messages.join(' | ');
  };

  const saveError = (error: any) => {
    const ErrMessage = extractErrorMessages(error);
    setErrorResponse(ErrMessage);
  };

  const clearError = () => setErrorResponse(null);

  return (
    <ErrorContext.Provider value={{errorResponse, saveError, clearError}}>
      {children}
    </ErrorContext.Provider>
  );
};
