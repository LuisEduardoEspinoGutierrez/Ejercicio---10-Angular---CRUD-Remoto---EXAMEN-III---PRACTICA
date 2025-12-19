import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const miguardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService).isLogin()
  const router = inject(Router)
  if(!authService)
    router.navigate(['/login'])
  return authService;
};
