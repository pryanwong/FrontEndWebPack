import { Injectable } from '@angular/core';
import {Portfolio, PortfolioSec, PORTFOLIOS, PORTFOLIOSECS} from './mock-homefiles';

@Injectable()
export class HomeService {
   getPortfolios(): Portfolio[] {
      return PORTFOLIOS;
   }
}
