import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from '../../shared/services/title.service';

@Component({
  selector: 'app-default',
  standalone: false,
  
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultComponent {
  constructor(
    private router: Router,
    private titleService: TitleService
  ) {}

  navigateToCustomerCare(title: string) { 
    console.log('Navigating to Customer Care...');
    this.titleService.setTitle(title);
    this.router.navigate(['/admin']).then(() => {
      console.log('Navigation complete');
    }).catch(err => {
      console.error('Navigation failed:', err);
    });
  }
}
