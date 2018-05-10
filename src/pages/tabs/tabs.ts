import { Component } from '@angular/core';

import { HomePage } from '../home/home';//首页
import { AboutPage } from '../about/about';//发布
import { ViewPage } from '../view/view';//查看
import { MinePage } from '../mine/mine';//我的
import { InforPage } from '../infor/infor';//消息




@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ViewPage;
  tab4Root = InforPage;
  tab5Root = MinePage;


  constructor() {

  }
}
