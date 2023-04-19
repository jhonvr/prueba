import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable()
export class AuthGuardSession implements CanActivate {
    constructor(private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const token = sessionStorage.getItem('token') || localStorage.getItem('token');
        if (!token) {
            return true;
        }
        this.router.navigate(['/admin/dashboard']);
        return false;
    }
}
