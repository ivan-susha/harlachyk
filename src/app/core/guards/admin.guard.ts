import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = () => {
  const isAdmin = true; // можно заменить авторизацией
  return isAdmin;
};
