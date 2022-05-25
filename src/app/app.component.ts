import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'missionheart';

  ngOnInit() {

    this.loadJsFile("assets/js/jquery.min.js");
    this.loadJsFile("assets/js/jquery-migrate-3.0.1.min.js")
    this.loadJsFile("assets/js/popper.min.js")
    this.loadJsFile("assets/js/bootstrap.min.js")
    this.loadJsFile("assets/js/jquery.easing.1.3.js")
    this.loadJsFile("assets/js/jquery.waypoints.min.js")
    this.loadJsFile("assets/js/jquery.stellar.min.js")
    this.loadJsFile("assets/js/owl.carousel.min.js")
    this.loadJsFile("assets/js/jquery.magnific-popup.min.js")
    this.loadJsFile("assets/js/aos.js")
    this.loadJsFile("assets/js/jquery.animateNumber.min.js")
    this.loadJsFile("assets/js/bootstrap-datepicker.js")
    this.loadJsFile("assets/js/jquery.timepicker.min.js")
    this.loadJsFile("assets/js/scrollax.min.js")
    this.loadJsFile("assets/js/google-map.js")
    this.loadJsFile("assets/js/main.js")
  
  }

  public loadJsFile(url:any) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}
