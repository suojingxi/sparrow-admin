import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  clicks() {
    $(function() {
      $('.tpl-header-switch-button').on('click', function() {
        if ($('.left-sidebar').is('.active')) {
          if ($(window).width() > 1024) {
            $('.tpl-content-wrapper').removeClass('active');
          }
          $('.left-sidebar').removeClass('active');
        } else {

          $('.left-sidebar').addClass('active');
          if ($(window).width() > 1024) {
            $('.tpl-content-wrapper').addClass('active');
          }
        }
      })

      if ($(window).width() < 1024) {
        $('.left-sidebar').addClass('active');
      } else {
        $('.left-sidebar').removeClass('active');
      }

      $(window).resize(function() {
        $('.tpl-header-switch-button').on('click', function() {
          if ($('.left-sidebar').is('.active')) {
            if ($(window).width() > 1024) {
              $('.tpl-content-wrapper').removeClass('active');
            }
            $('.left-sidebar').removeClass('active');
          } else {

            $('.left-sidebar').addClass('active');
            if ($(window).width() > 1024) {
              $('.tpl-content-wrapper').addClass('active');
            }
          }
        })

        if ($(window).width() < 1024) {
          $('.left-sidebar').addClass('active');
        } else {
          $('.left-sidebar').removeClass('active');
        }
        console.log($(window).width())
      });
    });
  }

}
