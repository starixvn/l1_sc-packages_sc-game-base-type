import { Request, Response, NextFunction } from "express";

// Types for authentication configuration
interface AuthenticateConfig {
  authUrl: string;
  audiences: string[];
}

// Types for request with authorization header
interface AuthenticatedRequest extends Request {
  headers: {
    authorization?: string;
    [key: string]: any;
  };
}

declare function useAuthenticate(
  config: AuthenticateConfig
): (req: AuthenticatedRequest, res: Response, next: NextFunction) => void;

declare function adminAuthenticate(token: string, secretKey: string): boolean;

// Export declarations
export { useAuthenticate, adminAuthenticate };
