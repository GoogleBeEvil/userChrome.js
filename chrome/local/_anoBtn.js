/******************************
   此处为按钮设置
******************************/
var anobtnset = {
  //※必须设置	按钮位置，0为可移动，1为地址栏图标，2为以前的自定义定位方式
  Icon_Pos: 0,
  //自定义定位方式：	按钮与哪个id相邻，alltabs-button，back-button等
  intags: 'tabbrowser-tabs',
  //自定义定位方式：	按钮与目标id关系，之前（before）或者之后(after)
  orientation: 'before',
  //按钮图标
  image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAACxEAAAsRAX9kX5EAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My4zNqnn4iUAAAIBSURBVDhPnVFNaxNBGM5fUCtePIgHEUTUg/4G0UsQBaUW8SQVBA8q2EMP0l7U+kWKhyg2WC9qa0wlwYoURY2RCopt1VoKpcXoISm62dl3Z3ZmfWfecZIsXuLDQ3afr8xukvKH/p9J3RGT+p8Mbm0KSz1h8TjLbGz17QUed0crU/6NtXjPslvE9PXg7g6KiPzFmTiOlbcED/Y5017Cl+d1Vv8iqxXlV6OFh67hCOPpmHuxDKHYQ44N+LtBHDvI7xWY6Ibx/ZQ6BqN7Yinkr2/+1S6U2mKZDWp1Xo+UNFtlPgV/3edmRDbcJWufMWN3dqLUFjw5bNptCEsn3MYxyG2LldDp85MojZVP04DOVEFNfBhmmfVu48hy2/GxscM/3kSpLSgcMEuEGddnGpfWNPraZkTx9T71ePkCSm3B6G7l/zSmeVslosWn8CjNywOq8YO/6Xdj5S2bGr7UMTtGyqWS9hT9VA5KVsuQP0gdGNureEPbkrPcruaYvx0w7b/Aw+fusexm72zq92kqXFTeCoXR8jNa2XGQ3RpD3UT2cLW6wKevhMXecPJUtFggkwD5Q21jJH/Vb0ONxPM3IeZybtIcI/EfshUN3Ce/Ipofa+0374gw2Strn2y3BbI2G06dS5TbhCNMHBXvL4vZETFzW1QGoXCEXVuX6CCTuiMmdQccSv0BIK4o/H3bSK8AAAAASUVORK5CYII=',
  //菜单弹出方向，不设置就默认,参考 https://developer.mozilla.org/en-US/docs/XUL/PopupGuide/Positioning
  position: '',
};
/**********************************************************************************
 *child:[  ]内为当前菜单的下一级菜单配置,支持多级
 *text 为运行参数，如果无需参数，直接删除text属性
 *这里是菜单配置:
 *配置与addmenu一样，但仅支持本脚本菜单位置，具体请参照；https://github.com/ywzhaiqi/userChromeJS/tree/master/addmenuPlus
 *-------------------------------
 *{}, 为分隔条
 *-------------------------------
 *目录枚举添加请注意：
 *1、斜杠"/"或"\"开头为相对配置文件夹，注意：Linux路径区分大小写！！！！
 *2、根据文件名全名字符(包括扩展名)排除或筛选;
 *3、关系为：先排除再枚举。
 *4、注意：配对模式为 test循环模式正则！！！注意正则全局"g"的使用！！test()继承正则表达式的lastIndex属性，表达式在匹配全局标志g的时候须注意。
 *5、留空表示不进行该行为。
 *6、在文件夹上左键点击为打开文件夹
 *************************************************************************************/
var anomenu = [ //下面添加菜单
/*
	{ label:"系统菜单",
	image : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABgUlEQVQ4ja3STSjDcRzH8c/JwcVRaaSUE27CPJwUf0XM1EaIUkJKceCfPBxQ5MJl67/mYW0OdiEP0RiR1I/WEpM1D8lDClFk1Mdtm3D4x7de13f9ft8v8B+zCphcgFBjFTCFAvOA+Ojq43tj+6+Cda18La7iW76OQWMd5wERCtgAcVtazcvMoh8FkrN4FJ1IX5SGJ1HxvEhKpy0yMAaYRgChxljkE/4+A247hjYCqgy47eGAvOhv87yxde/lm8bdZ+rd95RcD5TWHimtP7Fk65WQF/3hQLPdV7t2TcPS2RcFsz6mKYIplj2mWj1MnfQybfqQGc5TotnuCwcM4xMoGz1QxTA+8X9/qHPAVD4DoYbOEbFGyQyxcNfDuRs5xHnZQau/nuYTI81+A5WAkcqpkZbzSk5d1VAyRxySdhBi+riFireBireBozsVlJdz2bmkpbySzW5XDnvcuezdzGP/dh6H9wupHQwHEjR62JKaINTQ6GEDkAAAMQBiAcSpFAsg5hMUFmM0Rc0GSgAAAABJRU5ErkJggg==",
    accesskey: "M",
	child:[
            {id: "file-menu",clone:false,}, 
            {id: "edit-menu",clone:false,}, 
            {id: "view-menu",clone:false,}, 
            {id: "history-menu",clone:false,}, 
            {id: "bookmarksMenu",clone:false,}, 
            {id: "tools-menu",}, 
            {id: "helpMenu",clone:false,}, 
	      ]
	},
*/
  {
    label: '常用功能',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKUlEQVQ4jWNgoBQEGq/+Ty4eRAaQ63XqGoDsLGLZ1DVg1AtD3guU5AUAnrYbbMh9PvEAAAAASUVORK5CYII=',
    accesskey: 'F',
    child: [
      {
        label: '打开文件',
        oncommand: 'BrowserOpenFileWindow();',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVQ4jc2TIQ7CQBBFe6iKymaDrOglSLCEO1TUIZpWrMVxAVA1YDE4ktWtILRd9tuPAQJhW9gqJnlu5s2I+R4AGmMOWuvQG1MAuFjPqWpFAM54ABikPifLkHmZEQCllBRCfOVN8CAuIu5PO+pOs7m0vfQKgtTnbDWlMYZt07kJ4iLi9rih1tfB7VZBXmasztXg1l6BqhW79rdBqyBJEqfhD4EQ4g8EY3gKbNiara/8mgkXgTVUTqfbBE4pvNcNewXq3i7Rq+4AAAAASUVORK5CYII='
      },
      {
        label: '保存网页',
        oncommand: 'saveBrowser(gBrowser.selectedBrowser);',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH3gQGCSkYbPAS0QAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAALRJREFUOE/Nk8sKwjAURAsFwY0rEXz8lL/uH7hz1w8QH3NiplwvzcLqwoHTm2TCJE3TTurFQWzFrkLb0I/+RizEKMyLeIh75ZbAo54E/lEsRRHJTECuWdH3AoSUnRDAALrWmpV9KmFrOnMCEGN7GjEgbjHiMapFn/N7C/hEYwCPnwXwCoM4N8DzF5kMaB1ilOf8UQD3+6uAfJFWr2ZTMYDFSwon60s0dZFM9JlfduDfeQZd/wS3sV44I2/dIQAAAABJRU5ErkJggg=='
      },
      {
        label: '打印页面',
        command:"cmd_printPreview",
        oncommand:"PrintUtils.printPreview(PrintPreviewListener);",
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABSUlEQVQ4jY1Ty2rDMBBcP+K+MCXk0Hi1WvvmXuSLIBB88SE/0VIo/ZKe+rPtDzSgoB4iGVmxaQQLxuzOzGpGANOTL1QGV5xcSmGJ0PiSUvg6CbF9/xeACI37Tvb7/Z3W+r5t29IBn6qqeotmkjmAtO/78nDQj33flwBQSCmsV4f49OKHh2HILwCi4RQAsnAtIapfAEidwtU43DTNLTOZ3e55o5RaA0Axc5k3RGiUUuu2bcthGHIQovoiQsNMtq6lrWtpveS58j3MZBG3n0CEpuu6h7qmq4d9HxEakFJYZrLMZGMbw2Imw0wmJJkAjD/O1oR7F0qptb8b1/eNiK8jwATRuREzSymO3lIi/EHcfhChgVhqoGDC7F0J13SWXgQpD5mZyTcfo7QuJnGWOczBUhIz/4CYz49ozg0nO4mTOCJqrVcOeSJvqe8Phfm0Tz3kd2gAAAAASUVORK5CYII='
      },
/*      {
        label: '代码速记',
        oncommand: 'window.openDialog("chrome://devtools/content/scratchpad/scratchpad.xul", "Toolkit:Scratchpad", "chrome,resizable=yes,centerscreen,dependent");',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABCklEQVQ4ja2SvUrEQBSFL7KFlW1SpvINJpN7zgNoYacidoG7D+ArLCLsFrZ5BxG0mMLS0lTbrW+Ryk6LsUkkaNzEnwMHhoHv486PHC0e4tTKUP4sMLP4OSGEL3tm9j8CAFckXwAcfwhCCKM1s6iqFyQjyQjgFcDJ5Anquo7OuRTAcych+TZJUFVVLMsyisjMe5/0JWJm8bv24aZpIskbVT3tJABWgxfbBcASwNo5l5K8A3Dfrufe+70xeDUEA1gDuNwKq+piC7x97CzLdknOfwWLyA7JJ+99QvIMwO1PYMnzfL99no33PhGRWQsvR+H27Oe9T7JxzqWqejgJbgUHABqSjwCui6LgGPMOxkxvJUAHypcAAAAASUVORK5CYII='
      },
*/
      {
      },
      {
        label: '登录信息',
        oncommand: function () {
          window.open('chrome://passwordmgr/content/passwordManager.xul', 'Toolkit:PasswordManager', 'chrome,resizable=yes');
        },
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAz1BMVEUAAAAAAAAAAAAAAAAAAABEREBEREBEREAAAAAAAABEREBEREBEREBEREBEREAABwcBGiMEHCQHHyk4ODQAAAAAERgEW3sAFyABAQEEaY0AWHgAGiMJCQkEQVYAGiMGExgEhbMAHSgHGCAEWXgANUkANEYAZYsAEBYACAgAAAAAAAAAAAAAAAAKLz4EWHcFBQUDFRwAJjMAFh4ADxQAAAAEBAMEBAQBAQEEeKMEXHsEtPQEXHwAXoAEtfUAuv4AXX8As/QAu/8Ad6ICAgIAhbR1ngrjAAAANHRSTlMAPsTFOwEEBXk9CQoCDQ8jw9ubCxHu/tp2+P2MX/LWqvXAmfDo9/rxHx5MbAdp8ITd76zPMd9xLAAAAKNJREFUGFdFzLtuwlAQhOF/9gKNJShMRRMJyV2ak7z/E1iipkibCiqiCAnZh+LYyVb7aXZWUuF/zpLNAClVE/VhVgAy0ysARZ8AUm3Gg5FOqvUHoJvfrfUXSwSZi3eSNAVr3uukL43Geh9hNvjRqM/Wj3D3wYP6bP9ccuTB4oOO35K2wZ9/U9JFNkOnN+39PkIqjMLuqv62BzInIDfbTRY+2vYCMAwteRZBCIsAAAAASUVORK5CYII='
      },
      {
        label: '证书管理',
        oncommand: 'window.open(\'chrome://pippki/content/certManager.xul\', \'mozilla:certmanager\', \'chrome,resizable=yes,all,width=600,height=400\');',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuklEQVQ4jcWSqw7CMBSG93y1yGZvMLHUV6Ga6YkmhHdoFkIHZqllQRAwMyMQxLJNcAnIH1fBEN0m9ifHHPHlOxfPmzyMMYwpjzGGoekADmWDUBqE0uBQNv0BVGgQrkC4AhW6P8CPUgvwo9T2kyTp1F9AXlSgQoMKjbyo+hlc6yeCOEP7+KC+vxFKg1v7cjcI4gyEKyz0EcvNCYQrhNK4G8zmKzv/7yKdDNa7c+cK2/3F3WBILGDUK0+eLwDMbVc5IMVkAAAAAElFTkSuQmCC'
      },
      {
        label: 'Cookies',
        oncommand: 'window.open(\'chrome://browser/content/preferences/siteDataSettings.xul\', \'Browser:Cookies\', \'chrome,resizable=yes,all,width=600,height=400\');',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVQ4jaWTP2sUURTFXxGSzi+Q+BHUQnSZ95SkHdh2miyMe+9JYZPNksZiTQimFCz8RzJ3ujBPsJ2vIGyRIrFM8ZgupU0iDhn02rgblt11BQ+c8v4e591zjTHGbByYpY601rrH0b1n0nqYSut+R1prGwdmySwSZdEbFnvDudMpi2soc+/+DhB7QmIHlLt9lmivm9kXLNEe5W6fxA5I7EnnbevOXMDMl3OnLE+UD9uK/qYy8zWAKwBDIuolSbJ8CxDXTA1/XFf0Ouq91xCC1nWtdV1rCEG99wrgLE3TVWOMMd3M7rJE/W5mdymzL+no6Ws8Ty/LstR5KstSmfk8juOV2whib1jcN37V/l4UxcQAgClIURTKzNtTf4D+poYQFgJCCApgaEjsgHP3mcQNWdwFg341TbMQ0DSNAqgN5e4HiRtybj+R2GNs8c9ZgJFHqutaAVz9U4RZGkdgcV8mVnnYVu/9QoD3XomoZ0a3QB8e3eWjxw/S9+sRtroXi9YI4Gscxysz25mm6SqAM++9VlU1LlJVVeq9V2Y+HxdpnpIkWQaww8ynzHz9x6cAdiaq/L/6DbRoFO5cdXo+AAAAAElFTkSuQmCC'
      },
      {
      },
      {
        label: '隐私浏览',
        oncommand: 'OpenBrowserWindow({private: true});',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyUlEQVQ4je3RIUzDQBjF8V9CMotEoTCYufopBBqLx1ZOYiZn0JVIVC0WXTuJm6mqmpmY6Dt2CYIESXjJ9a7/vn7fvTv+hJ6wRocPTNhnfg+fcMCA1/gfsIIjtmgLiC5SfIPrsCZsiz6F58cvNcInbgJKhBHPlXEd3xgPLLGTnPeBh2T7qh7tMz/GI76+VH+p4JBd1NHK+1A16Mzn5iod7n4KXGmVfy4LaALawAVus7s260W+tYn3reHS+Wom8wF1Gbtkn/AW77+iE6SaONczlmqVAAAAAElFTkSuQmCC'
      },
      {
        label: '安全模式',
        oncommand: 'safeModeRestart();',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiElEQVQ4je3SwQ3CMAxA0SfEBgwRdsiJVboIXDtVOdAdGILOEA5YqAVUlJYjX4rkyPm2E4UHHUrl6owo6imwWSBO2K6c4qt8xGnOWX2Ff4EfFjijqfCacJ4FDsi4IM2IKc7kcN7IuKKN/fgjtZHLY+H1DXrsMeAWHVPEQ+T6mQkn7GLcPuKP3AFx9yRXZKxe2QAAAABJRU5ErkJggg=='
      },
      {
        label: '清除痕迹',
        oncommand: 'Sanitizer.showUI(window);',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABeUlEQVQ4jZ2TrW8bQRTEB6zfzEoGBQYGBQUFBYYFBQYGhYGGgQUFAQYFAQXHAvMnHKls6+723koFhQUGAQYBhgGFAQUFAQUBF2JXVeKorgetVprfvI9dVCGMa/IEx8qllUv3yWx6FGAODFxa5Ri7RM6OglRAP5PfcoxdMvsMAI3ZqUtlHcLkIEgBhCwtcoydk19dut+eNwvg1RwYHATaQXKMXZZum17vrUtrl378c04V8Nqluxxj59Ld1vw9kbMKGLpUurRuzE4LIDwBJLPpNvl3HcKkJeskFXtCSpduGvLscQXDLN0ms6mTl05ePg6pyZM5MFiajZz89aSKEnjRmp23ZP1Mm8MsXbm0asmPe2fRmp27VP59tzQbNeRZAYQqhLFL671zAP6s9CqF8H6b2geAJH1w6cbJ69Trvdtr3qkB3ji5qYB+lhZLs1EF9A9a506JnGXp4gvw0qWfLq3/688UQHBy05KfnLyuQhgfbN6pDmGSpYvnnvIDsPeDj/U5wKEAAAAASUVORK5CYII='
      },
      {
      },
      {
        label: '更新历史',
        oncommand: 'window.open(\'chrome://mozapps/content/update/history.xul\', \'Update:History\', \'chrome,resizable=yes\');',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABNVBMVEUAAAAAAAA2Rks4R0o3SEo2R0s/Pz8Af382R0k1Rkg3Rko2SEo2SEguRUU3R0o3SEo3SEg3REk3RkU3R0s3SEk3SEo3R0g3REtEREA5Rko3SEo2SEtEREBEREBEREA3Rko1SEo8S0pEREAfZGI1R0c1Rkg4SEhEREA3R0g4Rkg6RkVEREAajZYbjpkZmZk4RUg3RkkbjZkbjJUcipIdiZEajZYbjpcZjZcajppHR0Q3Rkg3SEoci5MajpcbjJdPT003SEo2R0kajZgajpgcjY03SEg3R0o3R0k2RkovT08zMzM2Rkk3SEg1SEo1Rkk3Rks1SEk2RkozREQzTEw1Rko4SEg4R0k7RUQ6Skk2SEg3R0o1SEo3Rko0S0skJCI4SEo4R0g1SEo3SEo1SEs4Rks3SEobjplNLMNvAAAAZXRSTlMAAS9WXD0IAmvg8YwOC7mzVichQZj63SUBOvRWDQ8C498SBAQr9pwFjvkWCaaDCjlTU8HDw8Dr41YQ/XfCwOEF/naifwkuUov4EAWVPPdaM+XcDwq1vF8vIEad+9kiAmve7YVRNgFv0LsAAADHSURBVBhXY2QAAUYw+AVmAjE7I2MMkFrKyPgFLMDLGL6KEQpeSgAFJEGs/0yPGJhkQSygWuWfYD4DgwpEQIIFymeQ4wIJSAh/+i/AyHgJyP8nbHaa0RBsmMFFxhNy/xhlgExDRq6fHD8Nbnx++4/xvzJIi9K3FwxOjIy3gHwmdYWHQDNegM0D8R+5Q6z12gbluzIzbwUK+DAyXgDz/YHyx4ACwYyCH2BO380F0hLHyMgKpP4wruYW/gNyKRfrbyb7BYnPtoFYANlFO1r+sFJfAAAAAElFTkSuQmCC'
      },
      {
        label: '关于火狐',
        oncommand: 'openAboutDialog();',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABsElEQVQ4jZ2SP2sUURTF7+IfGEnADTMg62OY9b37u+qEWNgJIn6AVPkCdnb5HBYRrCwEOwVTxEIkblZMs4hZmygkVUTBIpBCklkhVWBt3PAyTgpzqse95557zuOK1OC9nzWzl8A3M9s1s13gJ/Dae3+nzj+Gcy4BloAKGKjqYghhPoQwr6oPzKwHVGb2otPpXGoaXgG2Qwg3T1sCXAUGZrZ+QsTMngBfnXNJxG+VvWpYvtsfikgrrpvZOrA8yXwbqLz3Id4WQshm16pPZa/66JybqTlJgQPv/X0BloEPDY4vRu8L9aaZPQcGYmY/VPVhneCcS8peNSzXqo1T/uOumY3EzH4DtxoEZub6o/FcfzRuEiiK4jJwJMBht9u1MwocCrCnqgv/KwBcnzjoA6/OILAEfJEQwj2gCiFkMSHP8/ZEIMuyqbiXZdkUsKOqiyIiYmZvgFU5eTDny9X9z+XbXxsici6qt4BnwGZsNwG2gZU0TaebLIuIpGk6rapPge9FUVypZ06A98Ae8FhVb+R53s7zvA1cAx4BO8DWP8MxVHUB2ASO/t7IgZmNga3jzBH+AOm5ljjquU2sAAAAAElFTkSuQmCC'
      },
    ]
  },
  //{id: "webDeveloperMenu"}, 
  {
    label: '外部程序',
    accesskey: 'T',
    //枚举文件夹内的所有文件，当做可执行文件加入菜单，斜杠"/"或"\"开头为相对配置文件夹，注意：Linux路径区分大小写！！！！
    MapFolder: '/chrome/tools',
    //枚举的文件，需要注意:此处不使用"g"全局模式，可以匹配所有文件,
    Filter: /(firefox|nightly)\.(exe)$/i,
    //排除文件
    Exclude: /\.(dat|reg|sample|config|db|log|dll|json|zip|rar|ini)$|7za\.exe|UpdataS\.bat|wget\.exe/i,
    //是否枚举子目录内的文件，值代表子目录深度，多少级的子目录，0为根目录（即不枚举子目录）
    Directories: 2,
    //枚举目录,仅当Dirs>0时生效。
    FilterDirs: /^(?!Profile|firefox$)firefox.*/i,
    //排除目录,仅当Dirs>0时生效。留空表示不进行该行为。
    ExcludeDirs: /^firefox$/i,
    //可执行文件参数
    ExeText: {
      //需要带参数的执行文件
      Program: /^(firefox|nightly)\.(exe)$/i,
      //参数：%DIR%(上一级目录名),%EXE%(不带后缀程序名)
      text: '-no-remote -profile ..\\Profile_%DIR%',
    },
    //菜单图标
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA0klEQVQ4jaXRIQ7CQBAF0BEIBNtOEw6A7DF6FA7AESpWFXbapDCzBoVEInoABAKBQCI5QAUSWQQNaTC0w09+Nmve7GQB/k3oZI/k77rKEaLcN30KdjtF4npsyxkS12C30yj3TW8Aiev3KY/uHZDkMLblTFN0IhCSnM2S55oiSQVIfqf9AHQb+xN4P3VjIUlGKgAAAIlrJLmYrIiVgFRR7puQ5DlZlslgIFhx2gK37iq9AZMVscmKGEmuwYrTwUAXCtx6oQa+0wJSIclRVccn7fBPXsCg6sla3Uc2AAAAAElFTkSuQmCC',
    child: [ //没有目录级数限制，文件夹枚举和原有菜单移动在子菜单也适用
      {
        label: '我的电脑',
        text: '::{20D04FE0-3AEA-1069-A2D8-08002B30309D}',
        exec: 'C:\\Windows\\explorer.exe',
      },
      {
      },
      {
        label: '命令行',
        exec: 'C:\\Windows\\system32\\cmd.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAWlBMVEUAAAAqaK0qaa4qaa4oZqopZqgrZ6pEREBEREBEREAqaa4qaKwraKwraKoqaa0rZ6gsZ6dLTExLTEuOj49fX16XmJjZ2dlgYGCcnZ3a2tqTlJTl5eXk5OTt7e3IVKOjAAAACnRSTlMAkPyP+/uNAQQFJel8hAAAAGdJREFUGBkFwQEOggAQA7DuIEL8/1NNRARnCwAgyQ5JiyOZHRZucOSJNWkvkNVGqAV8B6FAdJApEDqYeYDA4Jp5IJQBEIrBlt8pFFbMfXqm84IVb/JWYA4IBc4s3S3cwDdhS9oPbEn/sUolL0EdiUMAAAAASUVORK5CYII='
      },
      {
        label: '记事本',
        exec: 'C:\\Windows\\notepad.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACGElEQVR4XpWTT2sTUQDEf+/tNtukSbdtYluD/YOFHJRipXjxIuhBEY0SPVhRqCf7AYrX1Iun3vUkfoGgB8GLeuixisVWbERqI5oiaW2TNH832azZbRZJDhYHhmEOM28evIeLxSfPVpq0bD3c/4VshceAqempSWw9zLcVNMNxIAUwNjoCwGG+tSTuLliIXjwPwOev3wCYiV35p49euoCdcwsI6Dr9fTrJ9aSjUu1q82qXp83rvQFcCHvOzI1rdEIIm+KA2IoD06iysfSK7a0t+jR1SgUwGw0ASqVyW1g6BTgFCDBNk+SnVWR+n3BvD7s7mRdtBVq35gaR0jkXCwuAXMXg7bsPhKWJfyRCZmMNI/c7pQLUzdaCYpF6w8RseptgIaWkVDe5//o9u5Uqi9PHKW9n+FmE8Urlugo4IaNmYikqmseDokhUqaA2tVircy/xhh+FMhOjx3i0vMbdoR40n86txac5FaBUMRBAPp9HkbJFgcQkvrTMZtZwwvnvXxjWBHdiMRLPXwIgaUEIQXCgn1BwgMEjQYYGQ/jYZ/5oltuR4EG4W5CYmyXo78GFigsBe3tZe0HrCpJC6iPCoxOtpikELB5cjRLy+8GiswAEgoHmgi7VvrvCr3Sa9XSDibBgePwkjy+fwef1OeWW1fGZNjdTdMLr9XLi1DSnz90kMnkWj9YNQmAYNZZXVtteYhxY4P+xMD83+/APucbiWCGAj74AAAAASUVORK5CYII='
      },
      {
        label: '计算器',
        exec: 'C:\\Windows\\system32\\calc.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABuVBMVEUAAAAA/wAXi3MqlH8ZmX8uLi4qKioAAAAej3wgjXwhjXgzMzIyMjIej3ohjXohinkyMjIxMTFEREAej3wfj3ohiXciiXkiiHYiincxMTEzMzMxMTEzMzMzMzNEREAgj3whjXwhi3w8VlMtdmslhXUgjnoxMTEyMjIxMTE2NjUyMjJEREAii3kre2ogj3s0NDQej3ogingkhnQginohincjinggjnsgj3wfj3wyMjIxMTExMTEyMjIzMzI0NDQyMjIyMjIzMzMyMjIyMjIyMjIfj3wgjnoiinYjinYfjnwxMTEyMjIxMTEyMjIzMzMiingngXAgjHogj3oxMTExMTE1NTUzMzMxMTEzMzMii3cfjXsejXwejXwxMTEyMjIyMjIyMjIjiXYkgnEohnomjH8dkXsgjXoxMTEvLy8yMjIxMTEyMjIyMjIgjXwfj3ogj3oxMTEzMzMyMjIyMjIyMjIfjXsgj3wejnogjnogj3oyMjIxMTEyMjIyMjIyMjIzMzMgj3wgj3wejXwgj3ohinggj3wgj3wzMzMzMzMzMzMgj3whjHozMzMii3kgj3wzMzM0NDQ0NDQii3jVZnXkAAAAhXRSTlMAAQsMCgsMAcn8kJTF6TbFxvcB8NIp7fbHxPTs8PgE9i0hEzFsxMRbJDH1BeU5xPj58W11tri0tImJtLS4uLdxmNXU1KKi1NbXkfvj58/490jW9/y1Jpof6f2C6vj8b7vHyFoWFCP1viCIJu3I/vv9+9rexvbD9BnM96fo6ennc3Xm6Oekr180MQAAAMVJREFUGBkFwT8rhAEAB+DfQ+R0V7pddimKVZmtMjlRtxjN12uQG+4rsJD8ScnIfFImihIfwGBBcoWi1/MIEr8ZkMSPDG2kXWgrSLZ6Uik6Cm3FX5IOqQwDJJAxAAmksrlv1d53Mxm0+y5TS0caXyffzQyy/SLTEICuzCEBZdl/IfPMXnkq1y6ZuTmTBdAtW9eMPx7I8sTD/srUHYQdWR4Gp4sebxuv57LO6LOyb+SDWu9QWveTgIRjSb1a++y9JUm9Wvv8B/oLORWJpJ/cAAAAAElFTkSuQmCC'
      },
 /*     {
        label: '放大镜',
        exec: 'C:\\Windows\\system32\\magnify.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACjUlEQVQ4jZXPz0vTcRzH8c+9/8CLnQQPhiF0rEuQhy7RoYYgCFEUBGEU/thKndM5p5vf6bI5f1Ng/kwtf/RDsBLxR6Gmlppzzk33K3Vu7HfPDl5c9oNe8Dq+H7zeQhxJrbFeKRmMwRpDHTXSYSWDMVhrrFeKf0UvGewjw8PEQgGOJhYMMDI0jL7GYP/jcZVesn+anSUSB83rbS41rnCl/RtZT9cxTnqIAR9nZqjSSccRbbWk7O8fIBD5wdWWVdpnPFh2oyx5Irzd8FM35SF3ZJtwHPqf96OtlhLfqdBUhfa9LtSjDtpnvGz7oyx+j5Esq2DQGsI0v0/hOzetC3vsuZ2oNdpQAlCm1gBxLjevsewKs7QbY3oXUnP09DqhbiVI5bwP+eQuxKOUlWtIAEpVaogFkT2xsOyNcFJWQWqOnvTrtaTl6EiRqam3hCmf90M4QKlKnQiUlKqIhfxkd1gZXQ/wwhqi1wlpOTq6AtDhg2Z7FO3XEBH/ASVKVSJQVKwMWy1r6MYdVH5w83hhj7qVICkyNR0+6PRD006cns0A62uryItUvgTg9p3chrbWNjYdbu69cqJ470U7f0C9JUyzI0rTTpwGWxTbjhuzuYUn5VmJC4QQSYVyhevlwCCWLQemWScPpvep+BygajVMt9XHht1BX08fmko9qzYvU7ozx5BT+YVyV2OjmcWFOVx2G86tTZxbNhbm5jCZzCiKlLwZn2DL7ce1PsaUdO44cuPmLXN+gTycV1BIXv5h7+crfI8UWUimNhrae/ky3gKePib0xwEhhEgSQpwWQmQcaboQImOg+CxjjXehOxnLUHb3RM353wJ/S0Zn0QWePcykqziTaxdTs/8XEL8sOyGEED8BR9kACqt7yqIAAAAASUVORK5CYII='
      },
      {
        label: '音量控制',
        exec: 'C:\\Windows\\system32\\SndVol.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB2UlEQVQ4jbXTMWgTURgH8K9IMZtLKRS6dVeSd1qEgkEEiUOG5N57996lcMa7V0cdnJxcxNlF61Dau0uamk0ppSpVtCZBW9NEpbNIXW0MmngJ/ZwakpyDBPymt/x/vI/3fwD/e5LppKaUGh8pzHkqRrl+aFlWZKSwmZENnaWO+gFNrSyczeYuhQKU603K0x1h8kMp2T0zIxtbL18gM2i3Hzh9dekicbwvRD0+NQAwrncODr5irV5FQ7KjcuUttlq/UGaMrmVZkajjXp81/WkAgNg1/1HUce8M3SDdCYLfGAQBGpJhu91GRERzXnQty4poyr9NbK8IAKDZ7hVi556FgOreLn78VENDMqzX93B//3NvhVnTnya29x0Ax4hanDo+DwCv37zCUnkbDclw98N7rNWrPYCoxSnN9n4A4NjM/INJzfEaIWB94yluPt9ALihWKiXc2XnXAzSVu6kp9wkAwBnHvUwcfyu0wlpxFZfdJeSC4lqxgKXydg+IZVduEVWYAQAgtns/6vh3h4GAcr3LBW0JwR4KkzcLhXzoGc8t5M8Tx/tGVH5iAEgkEifj8XiEUjgBAEApnRMmbw4XKZb1b0Szy8lQkf42lNI5naV+jlTlPuTCyJ/pX+YPOIz2jxAHZ80AAAAASUVORK5CYII='
      },
*/
      {
        label: '屏幕键盘',
        exec: 'C:\\Windows\\system32\\osk.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABj0lEQVQ4jbWTUWvaUBiGz3/ZfsBg/2+wmyRYO9YaYzNyQqPRta6gDibC2qKi6VTc5qaVCbb0J0xNjIHy7CJdN4qyTdgHD++5eL/n4nCOEP9jkqbDVos7B867pOnwfDfV2lJwiBDiqRDi8V8vJTJ2WU1LlJT1T6hpSSJjl4WqS8Y31wyvpgyvpoz+wM/e+OYaVZcIJWUxmExwy1UKlRr5So3C2w1ZqeGWq+RKVQaTCUrKigX90SXRMiBpOtxGIbuvsmszaTqsAp/xtym94ehOoFv0vnzlheWyZxfYP3y9kZd2nh0zy2L2nQ+fB78EXv8Tq8AnCpcY2WNuoxAj9yCzx0TLgGAxx5/PaPU+ougWQtUlrW6fjFvkIH+CmT+Jz+6btZnJFTFyRVqdfnyJqi5peB2iMEAelVgFPsFivpYw8JFHJaIwoOF1YoFm2DTbXc6bF5w3LzhreJzW27x/wGm9zVnDu+812100w0Zohpxpho2aljG6RNmAqsv7nmbYPEvs14UQ4snd892GR1v9md/nB80bBOQ8zIfYAAAAAElFTkSuQmCC'
      },
	  {
        label: '远程桌面',
        exec: 'C:\\Windows\\system32\\mstsc.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABjFBMVEUAAADRVDrQVjnTX0TRWDzRYUXRWT7TZUrQZErQZErTZUrVb1bUak/SaU/SfWby8vGQxa+k08D9/f0JdbUKdLMXbaIaa54/lo5TqopIo48ggq39/f0WfboYgLkafbMbfLI0kJ1Mpo8ehbMniqVRq4rb6+VSqIrW5eBUqIwigZ3p0MlCkrMQcKfKYkfPWzzQWzzOWTtAkLgQcKlEREA/j74KdbTQVjrQWDvOVzszjcIJdrbPWTzQVD1EREAJd7QTcKVEREBEREAIeLUIdbYIdbUMc7MId7YJdbdEREBEREAHeLgKd7YNdbINdLEKd7cJdbfXclnWbFPQWDvbgWv29/bA3dHN49rv9/P////24NrQWDtWrIn139nOWDv+/v7w29XNWDsKd7f19fXv2tTR5fH5+fj09PTX5t9tuJns9vLD4tVWrYnP4u74+Pe+39K028tYrors0sztwLbO4u263s9mtJP+/v7b7uaFw6mIwKmr0ebR5fHQ5PDK3ejJ2+YKd7YNdLENdLAMdbIMdbPqb+zDAAAAUHRSTlMAJ1hdWXb66urq6v19fv34/Pz4UFFcXqLsty/o8u/w8Pb98fzz7PLt/ozu93nz/Pz593cC9nHa8Fr3cFAhAdhRAQRX6Oj9770JBSRgY2NgTv6aAY0AAAC4SURBVBgZBcFBSkJRAEDRe/lPE00QHQVR+yh+imaCreItsYkYVpNCnei8WbgBQb6k3+R1jgAKAIICVFRTyhyqAJcjVQEVoKk+T+SJoB1QfXy3vHCgxpnq/VzU3NKYqUXTbduZ3ePJ2HD/1zpZcaojf4zt3bGE69/6RFVjo74BbnWqKzBmBUA1hLXq0ngloKY3Xdx9GQFuNKXN9xxyAR76fhQrgJ7SV3M/z+EVejVlrKaU4Qt5qB3+AYsJM7/qcscuAAAAAElFTkSuQmCC'
      },
      {
        label: 'TeamViewer',
        exec: '\\chrome\\local\\TeamViewer.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My4zNqnn4iUAAAGxSURBVDhPlZNNSwJhFIVnW1b7ouhntCh/Q+37oH5CREREGRWR0qIWrdr0TZsog1pUCq5ahC40tVHM0HQ07cM0ZzTqNPe+o1Ah2YEzvHPvec4MAyNV5Ht4hydVnylrYELm7Ue0LKf+5e6trCjxpstotiW/ecj+BOedBqXwwXZGNZ79zBEreRS9YCnB7lxVcCyrqKWjGxUdK0o1T6zkSZbQvBhnn4ZqwxUdy8VqnljJrV+aFmIYOcwakb81dJBlhlhRMHcHV1Q8Pad9wnaZx46vyPckOtOMdiRHRGVGFCQ0NM3eIpgpw+J4Rps1xkvzehJ9u2k2nWlGO8r4H8rMECu57zWYpiMIpkuYPcuidT4C01QYPWsx9G4k2HSmGe0o40+VmCFWFOhLV0S8ck79gO0ig52rZ74n7V69wHqe4R3JEX5jxihQYZoMYXhf4WU9GtxLMkOs5I6raJy4YZ8E8kaktuzX+WqeWFEwHmC3W2TYfa9G9LcOva9om5GreS7wJvSCMf83D2zF4QwVoOTe2Q65gP7N+K8csfw/dC2H0TDq+5eJYbgir/5B3LFiXaasoCTpCyxiFffVOWIXAAAAAElFTkSuQmCC'
      },
      {
      },
      {
        label: '网络工具',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADEUlEQVQ4jXWSXUxTBxzFjxezWD/DsmQJ7gETeXBLYzZSJ12YZQMaUj/ApkEp+uDL+KorwbDQELgxNriKGIySEgYPaP1glRjEiU59UCdlYIlKbdddIJbdRluSapMNaOSePRTRDf0nJyc5yfnl/3CAt0+cXIEmOVc4JjtSHGF3ikP+NcURdgvHZAea5FyIkyvw3hP96cLhYPuWjqejTXej0XO++GzfH3HlwctXs64//47mueRR4XCwHaI/fWnZOpi+tsF7+fsrT8M/+2Mcib+iy/eSHd4Y70dm6U+Q/jmyZXg6vLbBexnWwbcgph6VUH6jq/Knm9P2C7fYfcvDS/eG2dZ3hx1X7/HCbQ/dd3+n+/4IL/42wrrzd6aF8htdMPWokoASl/7Tumu+irZ+KorC+fn590pRFDoHBrnx0C8+lLj0SUBh28n9nd5YyfFezs3NUaPRsFXc/06fmZlh+ekrLOn0xlDYdjIJ0B8dsF59ljAeuch4PE6dTscn/dZ3+tTUFAsazrDA+SAB/dGBJCBHHPqy4aay297LSCRCg8FAR10xjUbjf9xgMHBs7An19WeZ3exRkCMOJQHbGq9rHcMJbbWT4XCYZrOZVVVVS2Q2mzk2FuDuH6+xqPt5Atsary98YD/12Q8DL7TV7ZyY+IuhUIyhUIwWi4WiKNJisSxmPt8Etx/p47enx18gx34qCchvLviw9Ewwu7qdkvSMgYDMQECmzWZja2srbTbbYhYIyCy0u7m+7FIQ+c0FSUBWiwq7nF2bzWJsfHyakhSlJEUpy/8s6nUmSVF+XeGIYZezC1ktqjdj2tmZtjK7zL0h77vHGlNtMGtvbVBbXCNlaPKi2uIaSbu3Nvh5kTW42Vj1eHV2mRs7O9OWzlltSIXalJmWf1C7dU+9LqOn1LNq34ZQRk+pZ+ueel3aNxVaqE2ZUBtS/1/9CMBXAA4C6MaylCEIyx9ix5pHRZEDxI7VjyAsf4hlwiiAfgCNAHIBfPwa8AGAdQA+AbAJwBcAMlGpOgFx5QgqVScAZC5IDSAdQOpCD/8CgHTmychN2wUAAAAASUVORK5CYII=',
        child: [
      {
        label: 'Internet选项',
        exec: 'C:\\Windows\\system32\\inetcpl.cpl',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADBklEQVQ4jY2TXUhTYRjHH2MWFUFXQXRRd90GI2obwvGicl5YXlg3RfPrJEnl+iD6oBZJYil4YYREGNEHgjk3W5ug4Qdm7ZzpFBQ/trP5cY46t7mzOadu7t9FNjW76IH/1cPved+H9/cSEZHEsnuIiII3C4xz1wtyodXugsGwg/6nYMjb6b+RL/rLdJ8D+vx4oKxgYE5fNNhQ8/bVma+RcpUpWqsyR5+csCyfUvJI/+eQdRh+fX54pKY66RidxJgwAadrAtX2eTzjZJT2LCGnbXnouGX12CY0jQJll78E9Plxv163VNE1XfLDNZsUBDdcLhcEwQ1RFCFJErpdPvS4fXjKhdey21d1RJTGMIyCgjcvZQfLdI7JO1dxp8sf7RvzbIN5jw9VDhm1ThkXO2Ko5MKxrDcDR5VKZTrBYFAE9QV8RZ0NWksI34c9W2BJkuCZnoEwPYPnjjD6PbMQBDcanaKXYRgFERHN6gsfZphCctaXBRgHpiCKIvq8PkyKMzDYI6gfXEC/dw7eaQl/1hsVJnDOuLCfiIgy6oYPqs2L0JjCePwzDPNIAExrHA9+LkJtTSCzNY5PQ4EN2C2gY3wOurZgBhERqT8Ih9UtS7jwbRlqawI5bStQWxMb+RrH/S4fPKM8xGEbXvaH1nvR40REpNVe26WyxKOP7BGU9ixB8xdcYnWi3NaK+f46JPpuobp3GK+7TDjdNHsg9Z4nrYkG84gfkiThlTOUgjWmMCptFkR7ipDkWID/HW/v4wh4dkOsk0Ycude7GHs9GMLZ9pUUfL5lHA1t9UhyLMa5KvBOI8CziNlLR+Eozt1ipMq6Wrj5ZE2zjHu2bvjttwGeRW2nFVk2GUmOTYArjiUdxY3btNY0R7M1RlnKNIdQ75DQPuaD1/U9dfU1nl0Bz2KNK/qY8mCz2yqVareqvOXQ3U5fjXlofqJ73CePDb6XZf5uaJUrGQFfvJK0X2mK9RZNvXtxeu8WmGEYhVKpTF+fnJb6saA0DOXtBM/mJfkrLQzDKEyVOfsYhlH8Ar87WuzT/F9NAAAAAElFTkSuQmCC'
      },
      {
      },
      {
        label: 'Host更新',
        exec: '\\chrome\\local\\HostsUpdate.bat',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVQ4jY3RsWsTcRwF8Mfd2aFFxVohFLmtoBg9uConYigSiBAwEJOIk4MU26CHlBLo1CHDuUiW2iGYUpAOkW6CZAiBxEAOjjtCMhwkBCSGIETwX3gOLj3zO+kXPuN7PH4/4MxlMpkn2Wx2K8z10s1vC58iI1RXyhBdOp3ens1mnE6nQtqXDW7+LhAnK66wIJVK5SeTCYfDYcDzry8Z/fyAd04fMvfrFVFZdlFZdvHxSnBJMpl83Wq12Ol0Am4c3+Wjn0/n4PBycEkikTDH4zFHo1HAs9MXjFYM3j66z+iPGPH+kvvXxeCCeDz+djAYsNvtCkU/3OPq91tEcUn8BrFYbKdWq7Ferws9fpfkwubiBG8uiH/BMIxd3/fZ6/WEfN+nYRi7wjAA6Lpe8DyP7XZ7Trlcpud51HW9EFqgadqe4zhsNptz+v0+Hcehpml7oQWqqu7bts1GoyFk2zZVVd0PLZAkqZrL5fg/kiRVQwtkWT4wTZP5fH7OurtO0zQpy/JBWH5NUZSSZVksFotClmVRUZQSgLV/w1cBbEmSdHIeALYBXDtbsAggAmD1nCIAlgDgD1wpgtCTh0LlAAAAAElFTkSuQmCC'
      },
      {
        label: 'Host编辑',
        exec: '\\chrome\\local\\HostsEdit.bat',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB6klEQVQ4jY3MP2gTARzF8R93N/hnCiK0DgcZCnXx8ApeOkStkQwxDSSXbO5tlENKaWnAlpIh4mCWEDBDi5WgKQpVigQ9AwknOTg84gU8SYhDCM1ws3DjcytJkyt98Bnfl2hksiwvJ5PJlfPIsry8Nz+/+JfoSCO6P/qneDy+6jgOTk5OpnIcB4lEYlsJBJ5jdxefiBpjgVgslh4MBuh2u1P9aX9ANBqtuK6Lh7Oz+T2i8FggEok8bTQaaDabk+olfCkvwh1m4Pf7t30+3y06u3A4rPT7ffR6vTG/fx2i9nEJ7jCDl5uXu4/uXVqaOBMRhUKhZ51OB61W65TxYx9fK3fhDjN4VwzgcfJmceqZiCgYDK5Vq1WoqgpVVfHt+ADHbyW4wwz2X93G+4MsgsHgmmdAkqR127ZhWRYsy8LnN0+Afx2UC3fwvfoatm1DkqR1z4AoihumaULTNGiaBiLCi80HODosolQqwTRNiKK44RkQBGHLMAzU6/UJ7XYbhmFAEIQtzwDP8zu6rqNWq02l6zp4nt/xDDAMU0mlUjgPwzAVzwDLsgVFUZBOpycs/FyAoihgWbbg9Z/jOC6fy+WQzWanyuVy4DguT0RzZ8/XiGiFYZjyRRDRKhFdHw1cIaIZIrpxQTNEdJWI6D+j5oCG+58V2AAAAABJRU5ErkJggg=='
      },
      {
        label: 'Dns设置',
        exec: '\\chrome\\local\\DnsJumper\\DnsJumper.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABiklEQVQ4jcWSv2vbYBCGn6nFWqrCZwKlQ9cOWZpNXbuJDFm0RUMHVSShQSBSYYhatHhzVmnskLFeOnnTVDDIf4NlYy/2Yi+fwT+4LqohwqSQDn3h4XjvOLiDF/674jg+jeP40xM4BSCKIl+eoCiKfACCILjY7XaS57mkaSp5nstms5E0TffU/Xa7lSAILgDwff9qvV6L1lq01tLpdB7Uel9rLavVSnzfvwLAdd1rrbX0+31pt9vS7XZlsVhIkiSSJIn0er2D3nXdawAcxwmWy6W0Wi0ZDAYym80eEIbhQe84TgCAbdvhfD4Xz/P2TCYTybJMPM+TLMsOetu2QwAsy7qZTqcyHo9lNBpJWZZSlqUMh8NHsSzrBgDTNM+bzeaXOkqpW8Mwfiilbg/NTdM8/5OlZ8AR8KrGMVBUtT47Ap4/HtF7lXFmFNyr7G9pVsB74DPwHfgFFNiN4mz2UbAbRXVJAfwEvgIfqiv2L7wAXgNvgXfACZeNO74ZBZeNO+Ck4hh4A7ys9v5dvwHDiIbVLWDWxgAAAABJRU5ErkJggg=='
      },
      {
        label: 'Socks5',
        exec: '\\chrome\\local\\Shadowsocks\\ShadowsocksR.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB9UlEQVQ4jdWRT0hTARzHv+pi1TpYsSCJdNRwWniYdQm6SAWximWMBJtEh0cQeZgionsegmFI4iU69Ad8hwgZHbIO08TT24jYYeyteMIab8+xDdcbm++xTd/efl26Naxu9T1/P98vfL/Af6d+htnn9vtPeWZmLntYlvlr6O7s7P35YJBbXFtbvuX3X/pjaDEU4uKpVOxrJlPfyGbpydLS08GJiRO/hURZjhmNRl1RVYomk/Qtn6eSppWujY0NA2j5BXoVCnGCJMUqul6v6TpVd3dpI5OhcCJB6UKBdMOgN6urH66MjvYDADwsy3gDgQefU6lIsVarb2kabakqfdc0ypdKxMfjxAsCpQsFquzskG4YDc/k5HSf12sBAFxnmIODLHt+OBC493Jl5fVmuazkVJUESaL3PE+RRIKSuRwpmkbb1SpFBEE4NzR0o+loN6emzrp8vjsjLPvi7fo6fRJF+iLLtFksUq5cpmKlQuMLC5zD7e7a67VWOBy+j9EoPQsGxXc8L2Y1jdKKQpKibJ8cGHgIoGXP3012+6N5jpMtvb3jlp6ekT6X6/lyOJye4zje6nRebN4KHABwFMBxk80219rZOQ2z+TSAw2hv72rr6Li9v7v7MazWQ80C2gAcAWAH4ITZfBUm0wUAZwDYABwDYPnp+8f0A+zyEtmTt4TTAAAAAElFTkSuQmCC'
      },
		]  			  
	  },
	  {
      },
	  {
        label: '文件搜索',
        exec: '\\chrome\\local\\Everything\\Everything.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACRUlEQVQ4jZXT3U9ScRgH8N9/0UX33XXZrKv+gK5aGiECB0lDDy8HkAiFISRJ5vgHam0u31rLulDmaILImhAvJ0EUVBAHR+1oZpdw0m8XDI11XPnbntvPvs/zex5CCCGjPq/HO+LBZWvU5/UQQgjxjnhQE2q4zKsJNQw/H8IZAABHR4f/XQAw9Mx1DmSzWbjcTiioDsiVMpj6DBgbf43Agr+plmORM2DQ7agDBqMWRrMRkVgSxQqPEscjmmTBmAx4Mz52YQKHsx+kre3u7W5NF0r7P5Eu8PgYiuNdIIxQLIXV/Ca0ut6mJH8msA08BmmV3PNPzMwiXTpGJFNGtriLte09JPMctrnvSLAsXG6naAKL1QzSJmk9CEZXEFnjsZwtI7XBIVPYRSJXwWpxD9z+ATrVlChg6jM0gDTCWR5BdgcfQnFM+sOYmFvAzKdFpNdzkCtloi3oGW2jhTmwxR8IJEsIfd3B59Uy4rkKCtwh4qmLW6B1mvMhbu0eI7W5j/fBON7OLyEYY5H5xxAf9XTVv1HP0DCajQhHk9gqf0OxwmM5wYLupdCvvoVcwi+a4GG3qg489QyeLZJKrYRKTcHlduKF5jpikzpM21uQT87/BVCdijrgdNlFV3n9yyym7DewMvMEU/YWbKQCTYBc2V4HBhw2VGtV0aMpry1i2nETm0sv8ar3Kk5PTwAA1WoVUpmkAVjtVptFsFhNgtnCCIxJL+gZWqB1PUIP3S0w6ju/fNSVUxd17USh6hBkcqkglUmEB+337b8BQHEG06Lz7QAAAAAASUVORK5CYII='
      },
	  {
        label: 'Hash校验',
        exec: '\\chrome\\local\\MyHash\\MyHash.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABNVBMVEUAAAAuLi40NDQyMjIxMTEzMzM3NzczMzMyMjIzMzMzMzMyMjIzMzMxMTEyMjIxMTExMTE0NDREREBEREBEREA0NDQxMTE0NDREREA1NTVEREBEREBEREAyMjIxMTFEREAyMjIzMzMIldsGmOMFmOIAoe8An/EAoPIzMzMzMzNEREAzMzMHl98BoO8AoO8AofA0NDQ2NjUyMjIGmOIAn+8AofAAn+8BoO4zMzMzMzMyMjIBn+8GmeAxMTEzMzMAoPEHmN4xMTEzMzM0NDQAn+8AofACn+wEmucyMjIzMzMAofAEmuQxMTE1NTUzMzMxMTEAoe8Bn+4FmeIBoO0AoPE0NDQzMzMyMjIvLy8yMjIyMjIwMDAzMzM0NDQ0NDQ0NDQxMTEzMzM4ODgEnOgAofEAoPAEm+alcMAYAAAAY3RSTlMAFlh5VxQXoLFnRUdstJ0uwzUBCQo6xCwBGAINDxkWBKE2b7ylo7hkPZ8Fs5rk6JC7GFua6TTskXNVfZWWSXiUl0h3a+tERe9vVOTpuROfObSdpLRhP5rFGy1BKqC6ckm6mRIaj6KaAAAA20lEQVQYGQXBsUrDUBiG4e9NT/qfJoOLYlKsgyA4SRfBqdgrEAdBvDhvwt1NFxcHQZzUCgcLRSrBoq3p7/MgSQIEK0lCUhcAoHEJaQMA988tmFaobueb4J6kwW8kyAgRFmkfng8gq8svipNeUm8U+41ZqJ8KLLMjoQiREMGjDyWR4zlBuAdJYh3cA9nPsSfp9W0y6fx5MguP1kjqPjBsV0mBbDk+1cfMwOYDnRfXqHt2994H96QLX9x31B7utEvcky7X4aZA0u4IXvamFbNbtpEqKy3mweqrysrvf26wSVPFsgwsAAAAAElFTkSuQmCC'
      }, 
      {
        label: '关联记事本',
        exec: '\\chrome\\local\\Notepad2\\NotePad2.bat',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABSlBMVEUAAAD+ynD9yHH9ym/9ym/5xW73xm9mZjRERED/yXD+ynFEREBEREDdsWbzwG78yHD//wBEREBEREBEREDVq2T9yG/+ynH9yG9EREA4c7E5c646cKY6cKU5bqTowmX/y2//yG/XdU7QVzvOVzqLSDlEREA4b647aI07Zoo9da31pmLPWDrHVTunVT/9yXE6bqQ7bJ87baE5cq45cq/GVDjNVjz1xG86bqQ5baM4cq44c7A3crHOVjvPVjnUVSr0w24+aZI2caw1dLQ/b6/MTDPPWDo5dLA5c7E5crDOVjzPVjnOWDrQVzzOVjuXTj7GVzs4dLA5c7DNWDq/VjyzUzrNVjvHVzvHVzuJKyj6vGz/v3+VTTu9VTunUDr9ym//v3/9yW/9yXH8yHH1w2/0wm/9yXH/qlXzt3u8k2i1j2bPWDvJVzvIVzvLVztltAtcAAAAanRSTlMAdN3Q0NiZBQF4WAEJOIR+AQINDzuJYZUEh6GlpnEOQMANo6cSBRwsLRcavMAMWFFiYVk6CURbX3BpaEW9ugZbHRoYEAq7jqhvROa8Jl8h2KLAiIlEvd7NAzYEHnovxwjbyMjKyvMDCQwNJbRDTgAAALlJREFUGBkFwaFKQ2EABtDviOH+XIZbEQYrhhVhS8O6pEHsNqPvteIT+AIGwXAtK4LFRYdhinCdlt9zJEmSJEmSQBKwTxJFn7TgM0mj6DMCtkk7UBwBARQT6sFLcmrpgTIFz1n8LPGkzMDjoplT15QzhP2c+rrrlNlQghN1s+2iTNdJrjDZbLtEcSFfw/E7b10SRZ+Mzo8/cJc0ij6jS+53N1ZpB8o11Fpz+Ldqjd3+NtS6T7JqhoPvf3sqMlN0DNVSAAAAAElFTkSuQmCC'
      },
	  /*{
        label: '关联IDM',
        exec: '\\chrome\\local\\IDM\\!绿化.bat',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABSlBMVEUAAAD+ynD9yHH9ym/9ym/5xW73xm9mZjRERED/yXD+ynFEREBEREDdsWbzwG78yHD//wBEREBEREBEREDVq2T9yG/+ynH9yG9EREA4c7E5c646cKY6cKU5bqTowmX/y2//yG/XdU7QVzvOVzqLSDlEREA4b647aI07Zoo9da31pmLPWDrHVTunVT/9yXE6bqQ7bJ87baE5cq45cq/GVDjNVjz1xG86bqQ5baM4cq44c7A3crHOVjvPVjnUVSr0w24+aZI2caw1dLQ/b6/MTDPPWDo5dLA5c7E5crDOVjzPVjnOWDrQVzzOVjuXTj7GVzs4dLA5c7DNWDq/VjyzUzrNVjvHVzvHVzuJKyj6vGz/v3+VTTu9VTunUDr9ym//v3/9yW/9yXH8yHH1w2/0wm/9yXH/qlXzt3u8k2i1j2bPWDvJVzvIVzvLVztltAtcAAAAanRSTlMAdN3Q0NiZBQF4WAEJOIR+AQINDzuJYZUEh6GlpnEOQMANo6cSBRwsLRcavMAMWFFiYVk6CURbX3BpaEW9ugZbHRoYEAq7jqhvROa8Jl8h2KLAiIlEvd7NAzYEHnovxwjbyMjKyvMDCQwNJbRDTgAAALlJREFUGBkFwaFKQ2EABtDviOH+XIZbEQYrhhVhS8O6pEHsNqPvteIT+AIGwXAtK4LFRYdhinCdlt9zJEmSJEmSQBKwTxJFn7TgM0mj6DMCtkk7UBwBARQT6sFLcmrpgTIFz1n8LPGkzMDjoplT15QzhP2c+rrrlNlQghN1s+2iTNdJrjDZbLtEcSFfw/E7b10SRZ+Mzo8/cJc0ij6jS+53N1ZpB8o11Fpz+Ldqjd3+NtS6T7JqhoPvf3sqMlN0DNVSAAAAAElFTkSuQmCC'
      },*/     
    ]
  },
  {
    label: '截图录屏',
    accesskey: 'C',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB1UlEQVQ4jaWTT0sbQRjGX5d+AI8t0q/SdLNqG4SkQcwpy5rFQslpcyltNXRspV5a/1QSETHa2hpJK8EcGvHg7tZlYalEbcqyMAT8IsPTQ5pNE/WUF37MZZ7n/TdDNGgYhoEbGCaiof9RVTVy010yDAODJO8YSCt/rkThIkDhIsDSOcfSOcf7Rvtc/X2F5T4YY1KPQda9FB/rW1iub+KZ6SHzs4lpy4fucWR+tXrQPQ7qMxia/1EWvBxH8DWOueouNCe4VTxt+V2DXC43QkQ0d7gnnMoMnMoMZmtl6B6H5ragui1oblecPvWRPDgDMSZls9n74UAyJw2xUPuEhXoZT0+b0NwWUlaA+HGAlNWuRjWbeHLgQSnYIMakfxtqh+YEQvd4mHnK4nhc8yF/CzBe9TF1dInE/hnkdRsPPoQGRIZh3CMi0j0uOuJJi2O82hYrlSaiew08KrmhWF6xOy3cDYeYPnFE2nSQPLIxdmhD/m4ium9C+XyM6FYN8noVkUKX/i1Ise28iO3kMVbKQ96YhVJ8BaWYx+jaS8irzxFde9EDMeo1SH1ZFJO7i0juvEOi9AaJ0ltMFF8jtjGP2OZ1rlUw0FPuR1XVyEPG7hBjUodbP9Og8Rd+6LxGY+zDoQAAAABJRU5ErkJggg==',
    child: [
      {
        label: '屏幕截图',
        exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\Local\\Snapshot.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACPElEQVQ4jYWTQWsTQRiGp79A8Df4DwQvepKFihdB0BQimgzzEWyKrdREmx4MWDWJ2tCauG0QkSpSZJtWxKa2atJbPYS0JmRT2aa7TWeRFgo99fh6cddtEnHgPX3f88wM8w0jojoRad5wzhXWtjjnSnsfEdUZEWmtVuuklFLxxrIsRdf13kajcUHX9V7Lso7VDw4OThCRxohIk1Iqtm3DiZQSpmnCNLdhmiaklPDWbduGZVlnuwqklGg2t2AYBprNLeyXCziaHcLeZrldcE4IMXdM0A5LKXE0OwQkTuNwJXPshOVy+bwQIs845869OmDbtrG3WcbhSga/zJ8ubBgGVle/XQwGg72MMcYsy1JM0+yAd3Z23F13d3cxPz+PZDKJcLgfExPpO4yxHsYYYz8aa5c+f1lELpdDOp1GKpVCJBKBz+fD8PAwZmZmEI/HIYRwk1afjLpv/FHPjGSrQUxXbyJbvI2xV4O40ncZfr8fAwNhhEIhCCHQf4swFA/ibuY6XpeSI67g02b23pTOMdX4m1w9hFwphof5IOJaHx4s+jC2fBWJog+Jkg/vK08H3QlbMtSoF3ai6hyZ9QDGv1/D42KfCzsCzrnCiEhb3u4UOPDzSgCZ9QBUnSNbvYHxNb8rcAepXdAN9tZf1AJ4uxEf6yr4H+zkTTWWdSfxg/HyVMGYjiwZanRhYzKWr0yMLmxMxpYMNVowpiPeaLVHz97V7mfVr9EzQog8835nIcScECL/Z8J6/vWdnT4i0n8DuWuO2z5ctP8AAAAASUVORK5CYII='
      },
      {
      },
      {
        label: '隐藏截图',
        oncommand: function () {
          document.getElementById('titlebar-min').click();
          var file = Components.classes['@mozilla.org/file/local;1'].createInstance(Components.interfaces.nsIFile);
          file.initWithPath(Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\Local\\Snapshot.exe');
          file.launch();
        },
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACT0lEQVQ4jcWMQUiTcRiH/6cOeesg1MHDgsDLTAlES2SYUoqCTCKtHWyBc+rEqUybflChERVl3UJYXdwixVY02Eg2pocJgoRzQwYiiWsTdX5s7GPT7ekSQeQO0aEHnsv78HuF+O9oJam5TZK6TvLu5B6FWpskdWklqVm0Wq0GCtAx9q1QAqDVajWIFoulO5fPU/0UrjwDzQuofwW1z6G5P8jMzAyzs7PMz8/j9XpZX19nbW2NXD5Pi8XSLRrN5p5sLke3A/pnQfoML31w7yPUdi4RCAQIBAL4fD5CoRAHBwfE43GyuRyNZnOPaDCZ+pTjYx5+WuLdyg6eMLhD4A5DudZFJBIhHA6zsbHB1tYWu7u7HB4eohwf02Ay9Yk6o7E/mc1Se7+T6497mPJ84esOrH+HC9fm2N/fJxaLIcsyiUQCWZZRFIVkNkud0dgvavT6gUQmw1ndZUp7m6geu82DubfY/F5UV9+zublJNBpFluVf46OjIxKZDDV6/YCo1OkG9xSFMy03KG7toKTjDhd7h6gaGud8vZPR0VEmJiaYmprCZrPhdrsJBoPsKQqVOt2gqGhvH46l01zqek113xs0Q3aaJCc3nyxQ2rSAw+HA5XKxuLjI6uoqoVCISCRCLJ2mor19WJRptSPRVOq3B43jH2h75KFcu8L09DR2ux2n04nH48Hv97O8vEw0laJMqx0RJRqNFM9k2E4m/7DqVuTE+3YySTyToUSjkcRplcpQpFZPnqRGH6NQK1KrJ0+rVAYhhDglhCgWQpz7S4t/bv+NH0zNEyP89nTwAAAAAElFTkSuQmCC'
      },
      //{label: '火狐截图',oncommand: 'event.stopPropagation(); document.getElementById("pageAction-panel-screenshots").click();', image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUUlEQVQ4jWNgoBAwQun/FOony4D/DAwMDEzYBPHQ+E2jpgtItmAYugAbLQ9lp5HjAnmomjQshhNlAMzm/+QagKyZbBegg/8MDAwMLBQaQjkAADuKJsCqgn0yAAAAAElFTkSuQmCC'},
      {
        label: '颜色拾取',
        exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\Local\\Colors\\Colors.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABdklEQVQ4jb3QTyjDYRzH8Tfa0DDJfpqDst9ysObsMIosbi76HRjZZDlw2w6zVmr3tRJrcpENJUmKHCg5KJ4Dp5U/aSUXRTtxUI/Lb7UWYw6e+vQcvs/r26cH/vPcQG8G9i7h4Bj6/4Q/4nH5EgzKPTj9E84OD8t7TZNrcF4SZcH1CNsPMPMVTsBgyQUnIOTWlryF3bIxQMrt9hyC+FhcLB/HYjF7JBLxB1LX4R0QdyMjMgkXyzD/a/yce89snmX3A6nr8DqIV02TSyDKwkdXT6tOp9M/1tDgWQGxBEPf4mg0qoZCoelC7HA4pi0Wi/3H2gA+n2+yEKuqOqkoigqQhuQGiOKkIQmAy+WyjXr9s3msKIrHbDbb8ssTIN4mJmRxEvk/sVqt48+590x3z8CcyWQaB9oL23khuQCiOF69QZvRaNQMBsMU0Ad0AZ1AB2AD2gArYAEagTqgBjAAlQBm/UGrfrcACtAMNOnzesAE1ALVOq4CKj4BaBTJa+zG/sgAAAAASUVORK5CYII='
      },
      {
        label: '完整截图',
        exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\Local\\FSCapture\\FSCapture.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB4ElEQVQ4jbWTzUsbQRiHV7B/UU4GlDULm6VKartpDSih6FUPLfTmyUOVYulB9JDm49xDpRfPvVTzsUFjzEezDU2zMQotJnE3bYU0PD3EJBuTQnvowI9heH/vM/POzCsII4ZLVk1J8WKXS1bNUd6RQ1K8OKcUJibdTEy6cU4pSIqX/wEYE6SQFpcjSXoKa8iBA+TAh84c1hiI96QhBw/jwr8mb77b4fneLs/2V5FDcYQB4k3y0pskMaPOdavNz1abqNFgeS8zuMnrQ+RQwgYIRnvJFzUL38oaTsmDc9qDb2WNi5rF8tvT/gmDUeRI8gYQSnSIgQNiRp2FJ+u43Gr/Cd0qi0/Xea+f98uLaHZAvEMMa1y32rhmfNz+B9N3H/Ktbg7djaAbVfIlg0L5DN2o8qvdZmZuEY/qtwFUZucWMC2r5+tKsC90o0rDtNh8ucOD+SU8qh/37CMkRWVja5vLxhW3/UMAvVyh2fzBi1e73J9/zD3Vz8bWNs3md/Qvlb8AGFWyxc9UqudcmSamZfH1skauWBryjQQUymek9SInhU+k9eJQzXZfvmQgHJ1+TKTyOqm8znGugJbOkjjJoKWzHOcKdGN2dX3xVCY20BiiKI47HI47oiiOC4Iw9odeG/D9BnbaZ5cEyxe6AAAAAElFTkSuQmCC'
      },
      {
        label: '动画录制',
        exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\Local\\ScreenToGif.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACwElEQVQ4jX2TW0gUcRSH/4YGvejug4VBd1PJ2+TsqrMXZ0Rnd2dGDctVVyLEF4kuXmrTvYmJ5j6IQkK+dKGHlaKioghC2A1zR8pUNBANCU2RzDBMI0Xt10NmmWsHfnA48H3n5RxCCAnSaylrbdmh6YbyyM/p+sTLhJBtsbGx203pic2NFw/Ous5FTTFMUikJVCnqpJMvbkVgpTcMX14qMfQwHKzm6PlMLqF+4P4uzHiVWOkNg/fGbqhUKnGToKQg5vniawUe1O5Fe+U+oD8UZ09F91SVRo0udCtxu/wA7jn3AP2hOJ4V7/kHDyI5xvjHSz0KjNwJR9fVCPzoC0XhsbhXJQVxw/OyEv7WCAy378RSjwLpLHXzN8lxXDBFURQ5wzCr7orD+NatwFyXEi3VkWjhOLhZFtfr9mNBVmCuS4Ha09EoTk39mpCQEKdSqSyCIEyIorhImlgWPp7HFVaPOk6PpwYDRiQRY5KEZzyPek4PN5cGv9GIar0evCgiNzcXVVVVyM/PXyFNLItJScJ7ScI7ScSoJGJCkjAZILa0NGSfyIPFUrhRML4m+B88IUm4tC6wwGaz/REMCgL6BAEfJAmy0YjxAPBodta6oKioaKPAbo5FjSUGdzMy4DjiQYPesBGWREy1XYNLEJCTZ94saDZo0GBIxRuTCWXqIjzK5PHJasVMXR2m2z346PFgtrMTtQbDipblxkwm0/eKiopfgkKGeVut1U5bdboFZ2Ym/o5tLRd0uvlqrXY6LyXFRwghNE2HqdVqN8uyQ+snpdFommRZhizL8Pv98Pl88Hq96OjoAE3TtoB/QEjQepecnFxZU1Oz7HK5Vh0OBxwOO+x2+6rT6VymKKo4EMxxXPCmodlsfjIwMIDBwUEYjca2rTYzDLODpumQTUae51sbGxuX3W73sk6nc261mabpEI7jgn8C9nSxHGrd1MEAAAAASUVORK5CYII='
      },
      {
        label: '系统画图',
        exec: 'C:\\Windows\\system32\\mspaint.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC/ElEQVQ4ja2TW0iUCRzFD98MFS2tsFJ0e5CgokAKQspyu1hNtW6YgeW1SSmIwiWyC14apyzH8TMb+8wMs6xMupgzkzo148w3jbdtZLpYDxVFms2seXfazVwpzr5EbNsGPXTgPPz/8DtP5wDfW9rlUMrJmOdUK+LlrUK6nKzMcyYpRTlJ0MhJwm8OtVJlTcQPX4BXo6FwqLHUsVXIakucfbMnKoreiAh2SbtHex25ox22nX+6b61gc+3PlLWTq+xxmPEJtsVgqk0t7L9zYNbFLuOe5+0qFf/WaDiSmcmW4GC2V6XRZQrlsC+Tb70ZNJ6dzfotSl19NAJwMwZBVvUY8VlZrHug4diHTrOG7vnz6Vm8mNagILZlxrGjOoPm8jm0XQlhhTSdD43beV+3pM6SqFiPugRB+6Ii+WGPI4+dZg07zRo+OphA46RJfJAe++nnqYxnWf5Eui/G8tWNLPpMqS9qE4QDqIkTjg01Fb731mj52qZjv6uAfc58emu0/2uHsZyplU+ZUv6IUurGWpyJFEqeVKa86nGKI25p89OK+EBTg27tvX7XcXbb9ex3FbDbrqfPkk2fJZs7Su+xsOkdDY3DjDxcR+SuQpioUlTlr1FczVst7Pp4O960nqJT3NBhiApodeREdPTIIrusOdx49BZjRJnh+y7zUHK4/N8OjBNVgmjev7Dt7YMyntkcaAeA0ugA+2CLxG67ntcvSFy06yxP5+5+eXmToP8swLAG6aa9IR5/a/GHgaZC/mHL9reb0vo6LVn+gUYDe2WRA40G9jbk/3U9KbD6fBRCPwsoisC1vubCkX5XAftcBRxsPkG/u5iDLRKHfi/ikPvk6N2SmMeX4iYYyzcg9os2SutQ7Tm95eXr2+Kw31PCwZai917rkTf3z23zWdJD205Fjq2X1kH/ywwE/5tTAAgEMCtkGjZlLEPp0XDYdCvRnLMKTUfCUZ0WhuJfZ2LfnJ+wGsACAHMBTAMQAAACgPEfQ6YAmPoNngjgRwDjvrrKb9U/OlyhmNv0KKUAAAAASUVORK5CYII='
      },
      {
        label: '图床传图',
        oncommand: 'window.open(\'moz-extension://a87fd410-ac8d-4aed-ae50-5ce81cdd2ec2/pages/tuchuang.html\',\'新浪图床\',\'resizable,scrollbars,status,title\').resizeTo(400, 400);',
        tooltiptext: '需要登录微博网页版，图片不会上传到你的个人相册里。',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACbElEQVQ4jYVTTU8TURQ9HYZCi2iMCtIgnTeKLGpIyCDMe28wo2JjgZmpxBIXLtzAomCixhCNMbKRhR981JRO3RBjwgaNGmKisjDU8qGgRKStrP0PunXTNqUWPLt33zn33PdyLlCEo6z7hMyMsKz23JDaA2rx/S4YEbzMihDNnJVY9yWvavZKzJqWuZEk3FyWmLkg0eA1RRkoLylvUIPDXtW6kz06KKUuRVHcTfycB7ou+nwhJ6HGTYmbzwA4cry8u8TNZYRCZQAEznl1Z6eyj3NeDUAoNJKZNe1pDbQAcOi6LgIAJDV4RaJG/B/x5Eoj7HTjtgbaBU1i1voxzRr0+XxOELWnnzDjeW2zv2qbeDRxCLHUZ9jpFcS3Dhb0ENrazh6QuRmTVOM6CLN+1Db7qyilrrz4aqQCscw7xH+eRnxLg51+j/haeeGE7e2BvRKzlkC48UnXdVFRFHf+zXYmAnsznPeMZwYwlZoq+hsHYVYCRDNnZWacpJS6AAh4mu6EnfmDWHoGY79cGPlYiejmTNmTb7/3jM735kw8rYEWopmz8JzyH5G5kWxg5j2iGn0NHb0XcT9Rh1h6DtHUYTxcrBEjq/Py4Ohx0mFeJtzoIzR4V2LWEmFdXgBAPaUuiZrnvdQckpkR9iiGG/HMC8S+nnE/+NDlnFh528z8NTKzwl5qDtWrRgA05No9mHb6pXN8cbjyceK2OLk2V5yH/0EQI6uvXY8WblWMJYcwnqjbgecoVRQ459XOyJc3zvHFYcQ2+ncS55NYWMztQFl0/RUmvjdhamN/KXGWt22xHNk8lOu6LiKa0rLhKemc4/0FLX+67ui/H6sAAAAASUVORK5CYII='
      },
    ]
  },
  /*
{
    label:"外部打开",
	image : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAV1BMVEUAAAAbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxtGnksMAAAAHXRSTlMAI/i59cOKK/3x6+bVrGs34H7Lu7OGeWRd3dq0HD+xOPEAAAB5SURBVBjTjU5LFoQgDEsLBQRF0HGc3/3POWJ9btzYTZO8pgluzuiGwY0nXRP3xvScXsqNXRQ4frQliUAzs9lW3JRnR8BcvC8CkM3oMgD2gA8AaoRdD4EC2j1qs8ibfp9JLZBCIAlhak/NHmOrxi72qyDHs9il+p35AyMzBBChpCm+AAAAAElFTkSuQmCC",
    child:[
				{label: 'IE浏览器',exec: 'C:\\Program Files\\Internet Explorer\\iexplore.exe', text: "%u",             image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH3AQJFykNAj7JHQAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAAiZJREFUOE+Nkk9IlEEYxmdXt8x1dd3CKJAQMoVVDAs6BBEdWwoPHayEDq1B4klEiMBDXergpXMdggpiv/0bimSHOqToIfPsN7PrkiCC0h8j3TT7zdcsDVsHX3j4ZuZ5n2eemfnEXurYeCFwICU7AkkZBw/2JeXdmpSMGvrfasyq4P6kPF/tyBEwVuW4L30Jt8j3AwajYBD+Tiitmozkb0GcpXEcwYZIuLs2/I67iPhm3+yKrz6jouCkkf0pol1C+KlSaAO+xAYPI1nVSdI2IxWiJimjEAvs8K3c7E+4Uqdh5xmEPyyjEkkfHcrlI564bXLJj/A+eE/zZ92E0Amm5PGWiUIgnFH13MUAJl/LJowXudhWz6Aplw8zGUVcMORyLbeuue43RZ/+dr4uVmP6vGwAtvVlak4QJQz5qkxisIZZAryw8AwsWAY65VPPAKc+Fko2icn/sAN+GuxgkBI8RSPO72wxc32+Xn6WyzZYi4GLBrFgWp3WT9eD2xr4bu2+yquc8uJZhckF+vtBnFe40ZBRRwW3+5gokxxjrCLFW5rO8AJ1/HEH4ePa2OLn69KqWSCewWSIyREWZ20TLWBtGnxkvGmtb5DiqhcLgzkMrpuI3TTP2SaVQPyFNEMtE0tVnkHAkfcweMK7R0lxgu8t5lkaFdhC9AtsM17XR+VYsa6pot8T60IUYrGXWx1EfIV5x+FcvpZxOzGvgWFwm3TnItl8yMhMCfEbt0DTTmnmDkAAAAAASUVORK5CYII='},
				{label: 'Chrome',exec: 'D:\\Program Files\\Chrome\\Chrome.exe', text: "%u",          image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADg0lEQVQ4jXXTf1CTdRwH8K/lXWwccSecCgJCaNsEIVi3avPHfvnsefY8Y10qnl50V10ShXddlF39EdwxSkrUODnxVDLRnHS4wgXbqISM/QFM4MHhbmqw7YFBTIb9OCeO3v3BnaV3vf9+f153nz/ehDyS8G5DXuQV84H58l3+6Nu7o9E3d83PvfrSrUgp0zhlVD/7aP9BxrOzEwSt6vAMp/ljdieNyB4OkbISRPZwmN1JY6ZEh0nd5rshpeLUdak05aHjwfR0cfCZwguCSoEpjRJhagumGTWmWTWmjWqEqc2Y0ighKBUIFRchIM1z+lIlSQ8Aa2nx4XCODMHCAoTkxRAUcgjyQggFMggbpQjlbURQWoRAbiEmMvPxa5oMN1dJz9cQ8hhRX6akZWd0sSHJ0whlSzCxXopg7jr8VsIh/HE1wrW1iHzwIqbK10DYm4XJ8rUIV2RhpjIDkU9TtIS1M3VUL4u695/HrdU5CGRkQ/ioGu19E/isZwb1PbP4ZiiIyLgFd4fFiF0T475PjEV/AuJ+cQth7cwA222E2U6jqyAbwlY9Tnf7sb15DK+d8uL1Fi92HPWiqVvA4rgBf/PLEB8VIT4qwsJwopewHUzU5GBg6OFQVZWPkYoqlH3pA1Pfj+1HPNjxhQfs5/0oOeJH2G8BeII4n4A4L8LCUFKUMDZ63uRgYHIZYby4CWdP1MB86Cqeq74CtcUNtcWNF2quQGnhEbheB4z+C8QGku8Quo0a5joZmBwMaKce7/zyFt473YeMSjtk+x3YsN+BNZV27D3hQeyGeekFXoT4SCL+dKf4iKF1WwP73RJgcjDgXBQO9TXhjcYfkb/Phrx9NpQ29KL/aiPgFWGRfwJxXozYYDLmfko7R7THtcXU19QCd2kJYB0GmF00PuyrwieXj6K2+xiqne9iYmAFMLoccV6Me55k3OldhemOLI4QQoimWd9CW2mwlxiYuhhwDhp0lw5GlxYq2zYcc+YA15YjPpKIe4PJ+L13NSa/zXG2tZHHCSGEyA+qU7c06Z1UKwXjxSWI62RAfW/Eyx1bcXtgBe57nsRf7lTc/iEDgfZct+98ZvpDe5DUq5KUDRqrplkP6gwF2kpDY6XR3rkBCz+vRMSVCcH2FG6clTjGjq9N+99VFtVu0isOqE/KD+r4iibV3Pi5ddGbX60f856UtY40S02EkGX/7f8DPn0d28pmYMIAAAAASUVORK5CYII='},
				{label: '360极速',exec: 'D:\\Program Files\\360Chrome\\Chrome\\Application\\360chrome.exe', text: "%u", image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADBElEQVQ4jXWTb0zUdRzHP7FylLPMGLOF5M5MRjGmRMj946yjQZ4e4EDJWWba1oZOZz3xQbtkaxeQRiSxUbb1Z7e5zK3WKDdxi/UARJ2eBzmyc3LccbuRccfd/f7c/V49AIRovrfXs+/79dln+3xFluTdHxL5TT61fftX2pe/dqhFI/XqoH+bmrzhViKje9T3g3uDuUs799L0neJ09uoRe4/O1l5tbNit3Lz+qop/EYE65ebw2+FH/lfe9Y2y3dGjp6u6dWzdOm+2qtP91iS/b0kx/Eqaa7XKgsitRBckHk/O0Z/iec4ePWI/pWP/bJb39iQ5Uxrnx/I4580zDDhSDFWnuVozJ3JrFz3iyZGD3/Lo7q+zh21dOrbOBVrq45wqnOL0+rv4SqY5V5bgl8oZfqtKqJddsQvXG8J2ERFxeC4+uOO0dsh6Usd6Usd6YpaGA0mOL4/Slhfj04Ipzq3tJ7K6QlVWi6oW50/oNRWdHK5bKVvCJ85W3/7c91L3TMzSoWOew+LVOPRElGO5IQLLnaQeENK5gpovaOuXkXnhSWiy+eTlyY+D1kgb1mAX5i/C2UqvRqVXY7NX4/aEwfiISvJZmRWsENSnBL14BdkXC8BVFpOa6Cfj1kgb81Re8lH+cx8bv+/jyt8hQvEA2QFBfUdIPyZohUKm5HEMy9Pg3nRXXJOd1xYLKu58QOnYUTb491F4qYrjVx7CCAjZQUE/IGimHDIb8zFsJthpHpW6ya6u+bJ54kPKgsd4brQF09Vm1g2VEvlT4JZgjAnZAUErntvf8Qy8VdMq+0O9BVXh9vGl09cMuTlyowiiORAWCAncETKND8/uv3XTrekjjatERMQW6Si2hbxTi6cf/KM6TaIc4iXwzwaYWguxPIx2k9+wrZtmb+3m/5yyI+hZaf7L02kZaTl7JtrsJ+MCrRY0JygOSFkgUU6m3/66al7z/H0/lKruKMJoSGDUc4+sGzIu0Ov7AoHGZfctzwdln4ns7o8wmgcwdvkxXhsk+0ZrKrW/YOnbfwGaHza07T0rkAAAAABJRU5ErkJggg=='},

    ]
},*/
  {
  },
  {
    label: '书签管理',
    accesskey: 'P',
    oncommand: 'PlacesCommandHook.showPlacesOrganizer("AllBookmarks");',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABcklEQVQ4jZWSzUpCURSF11AIGjXrGRr0BrdeoYkP0KSRM0uKOAgVFAjRQKQgIiI0wSIaWFykIAmxLlx/UOJCkwgy+xkEBcHXwP6sq+SCb3L2Pot19tlSF3kp4aVEt56Oqm/LNMshmuUQ9W2Zng1qWwI8wKO21WOK0obMrTMBby68udw6E5Q2ekjhrgteT9pw1zukOE/IXKyKn9ycBeF5t42bsyC/+84TMirEP976YsPj2v94sQGPQlzodFkmvyKeKuPQmPsXT5Vx8ividPljLrklWccx8eCMwXWoKw/OGMcxkVuS1TaLowVZ9qK4L4zCVdCX+8Io9qI4Wvh1+VPZedHMD8PliC/N/DDZ+Q6/sW9kHUQF1aGuHETFvvFJsDcrU0/2gzv4xZ09wJ090HZWT/azN+uzVJkZ0TgMgNNH4zBAZkZkppXLTCvnV/tjkI4IiqK6KdIRsTP1HXNnSlY60qpRbNX/GCTDMqlJkQx33nm/nnc/ELfMuB1aHQAAAABJRU5ErkJggg=='
  },
  {
    label: '历史记录',
    accesskey: 'P',
    oncommand: 'PlacesCommandHook.showPlacesOrganizer("History");',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADAUlEQVQ4jX2TW0ybdRiH/4mJV5oYE83ul2giydSQuZ6ACbSl/QJjYreumW4L1U0Nkx1iTCAGDSbLtog1wnQhQYmRZcFhHDh1F4QdqGsZ/T5oKdBupV27ykkFhvT4PV44GwmRN/ndvc9z874/ITaZ4pHyrTrF+JNWqUxttrdhOofvvSTJzqkSRcrsjh1CIxvzktfZVjxSvnVT8LNryae+dCcuvO4+hTFgZ//cu7w2fwzHbAOWkINSRcoaZOuVF3w7n9gAd1y/X/z5UHzuZHeQpp4pTgQ+wRR4FcdsAxq5ghK5mqrJfVjDDnRK1cK2m7qnC3D7YOCx9hvx+NFOP31j86yksgBMrE6ikSuwTR4gvJLg8OhpyuRX2HP/CDrZHCkIXEPx1ubvQlwYSYKaBTX3T8iTJ4crcQ5QARWn9wymCTvGoC29Q67YL4QQ4sxgNNncFyK6uARqCtQUbd2XiMQToGbWSSOLq2jlSmpjh9CNmQZEy0Bky8dXI5z6+S7kVyD/APKrDN7y8nzdUc529bK2tvJQnAY1g9FTT138DfSKJSpafgw998GVO7iGIpD7A3J/Qm4Jckv4An5etDXS2dtfEJP/i+pfj1MbPYjWZ14Qxy4Gnnzvh2maB6YhO/8wC5BdhNzvfNjxNcFw8D/iZUzXT7ArehCdbJ0WQgjRcCk49k7vBMPhGcgkIfMbZGchO8fhlrZ1Ul8sgd5jp2bmAFrF+K0QQghnz3h9fY+f431+lpdjkIlDJsHagxmaXecL0nQqya6hFsr9eykZq17b7ivbXjilvVvut3X5ONmncPtuCNJRglNefrl2lTvLbjojXZi9Tl4e34Ml5EArV/Wv+0Rru2eLdN57y/KFF2OHh6bLPuo9rRjkKnYqtRiD+6i756QyuFfVjkq3n72hf3xjGWwXHyl1uZsMn7rTurZhNN9/hCXsoHLCjt5Xg3bUktoxYm3/3zIZDIZnJEl6u6LGdrrsrdbL+vfPejTfHIlpz705Xtq4+yuz2dxoMpmKi4qKHv2X+Rsv9ESBXtkq6QAAAABJRU5ErkJggg=='
  },
  {
    label: '下载管理',
    accesskey: 'D',
    oncommand: 'BrowserDownloadsUI();',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABD0lEQVQ4jc2RsWqDUBSGz32KuPYNQp8gY5ZOfYBu6R1EQbQgSsHNxYx9g8yB3DFDxywSuIsVFLGgHXRJIfvf4VJrQko1U3/44N4D/3/POZfoX0oTDJcYFbA9Etafiu2RxgesDoSXRrE6DAiYbEj02122hOdKsWzpZJTJhsTFV58+6ITHXHFe/7UbTTA8vFPHfaLo1/4cRRMM85wwzwmzPcNs/3MfvEhNMNy+EaY7hulOnUf9wnfIzatitLkfMtR8dyWdFnEcQ0qJNE1RFAWqqkLbtmiaBnVdoyxLZFmGJEkgpQQRLTp3FEUIwxBBEMDzPNi2DcMwwDkH5xy6rsM0TViWBcdx4LoufN+/bi/n+gILjeZ6bLN58QAAAABJRU5ErkJggg=='
  },
  {
    label: '附加组件',
    accesskey: 'A',
    /*oncommand: "BrowserOpenAddonsMgr();",*/
    oncommand:"openTrustedLinkIn('about:addons', isTabEmpty(gBrowser.selectedTab) ? 'current' : 'tab')",
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACaElEQVQ4jZWQ3UtTcRjHv2fulPO4nZ1z5jv0cmakFBHOLiJfquMKzKVQ00ANzRokdFEQdBOpsIJJxbwIRgpTM18qJgt0ZV1IZhA/i+OUGtRdF3V1LvYHPF3spQRFfOBz8zw8n9/3+QHb1aSiYdoRxYyDYdoRxaSibbuzoaYKYt1/blHHrxvU9fsmYaogtjPBhBJzr7UlW753k3utNYkJZYeCsKhhXGHenz7CuMIQFrc5ISyHEFbY/xTOViQaV9vJPqMm/vXl0OaCYZld/HGNmtY66Vy8gxpX26mBealuuZnOfGmj5m9d5Fm/TBiW2eaCkJ2d/XqJji82ZjnxoYlcb08aloCgWwKC7npTbyBk30LwRGSnP1+g6nfuLDVLHhIGrXH0wYe7cOEeQvDzvtRCUNAwZIthyBZDUNAQFFn9pxY6Ml9P5a+OUemzQ7R/porQhy1efGSNulda6ejCqSQe2ph9ZF/COVtN8piTpFGVpFGViqcqiX+we2OCgZx0goCV1X48T66FBqpZ8lDVe42kFyopL8upKFJBRZEKKowcJGlsj2Hy87rJz+tiuMwwPbbrKYFfiNYtN9Ph17VJ3BcYH5QT8ryT5JG9Bn91VxxeMHMPHxeflhnKfDnJc06S5lTiBsW0oD9XQ39eLEWuhoE8VrxUSaYrvA4vUjG98HFdZl1aVCkDF7Dqm//JHQtzrBwgrseswwtXWuDiesy6xFTKwPULWUEuABuAAgAluM4zaV2l/EiJAS9CaUEoP1JiSOsqZeBuW3QApQAgAigDUAmgCm7Tc66X17leXkdn+oRO+DK97MyTMw3A9Rdybg7pOByoRgAAAABJRU5ErkJggg=='
  },
  {
  },
  {
    label: '选项设置',
    accesskey: 'O',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABwklEQVQ4jZ1UwUoDQQxd6B8IQr/BUie5ePUkFHryUPwbwZMgVIplJxEE7z0LfkNB8FoQCoLgtaVFWHeSeqiz7M7OWjWQy2TzkrxkX5JEDDk7ABJrSC7DmCG5BBKLnB3EcutgN6t9YM2QdQOsGdr8uIjZ/LgSu1nt/woUSKfIuvEOrM/A+lx5I53+CiwZTFpA+lZOjjmQviWDSSuK0ble7hVjsZzXklkzP2rZjZWLGgZwfoKsCyCdIulLFUhuu+Os65O646wLLLcVYNKXb4oWwPlJAqwPsZEMudMmVgy50ygNrA8JkNwjq6tWlfHuxckoAHRAcr+tmLqzcqDMaZN1rpd75UZM6s6CijrznOwC8+Y5B9JZfQTW+b8BWeeVQEDy/0b2SwQSG94YkIx2AYZLAdYMSGyCrI+RE3BgXb8RzLp+7TK2/pgcpnkPSFdI+oSsr9UPZNhJ1+1izHTdRpZh0NkcSZ+AdHWY5r0tuV41BpNW5L4234Vew3cgGfn/uVl5BpMWkr7vEgckfW8UhzrhgXyRzoo7/at8ddJ1G0k/is2VlgPW9YuLIP0o8/ujGfo8MlbukGVY657lyli5M/R5FMv9AqdiOHRwiFTLAAAAAElFTkSuQmCC',
    child: [
      {
        label: '火狐选项',
        oncommand: 'openPreferences();',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC+UlEQVQ4jXWSXUxTdxjGn3P+Bz+mEHGbm7JNY4LiyDKX3kiIy7nxQuONF+xiJotekfidGFEj0ZPFj7CpaJMeA0krLVRqpUIRUCmKEfxKvFiWaIxSICCVflFakLa09dnFEAHDk/xu3jzPkzf//wvMo279q/WZRz/GM08K3/9jzVs3n29aVRq+SD/5qTr1dJPnhbPw28TD1UfSHRJTHRLHO9ccfV67YWXqWdGdVHfhOU2D8lmB17Fk54cHi8n7YLq7wDfRubo3cVcw2S4z3fWDN/OowMf74IcHOQy3LC2ZiknTBfZjyM14kEh7wLE2wVirwrE2wbQHzHTMwINEyznkApBUVVXwr75orb9dLY11bdud7PiyJ9YsOOpWGGsWnLwNpu7MZvJebk+ka9vunsbN+5pOL/8ecc8qc7JVYqIFHL0pOOJSGHHJyXE3ypwnkNeoYU28GWeSt5BJtoCJW//7Yu4FjLblncaEWzTF3WDUJTPkVDhyQzDqwqG5bzThRsVEEzhyQzDkVBh1yXzvzrJCU6GE63EqfF1OBx2CYw1g3X7kzC1oOI6CoEPQX68wWC+nok6c1FQo0AA5YJOPh+xSKuoAY9dBc8X67Dl5+cqxn38ZrlXorxOMOpAavYYyDZARsaMhXCsxYgdHp4h2btk7M1xcXJzd2/jr+Xc1gpG6T76IHRaEbLgatoGzuJYdH3/6x0Hb3ztW/FW+Pb+v9bezQ9Yl6ZB1ti9kxRm0lyP/xSUceG1EacAMb9ACBi1gwAy+ta3kYM03HKgSDJin5hbJ23dlYenzChxwl2HV9J6Vu7DsXTXi/mpwuArs1wX7TAr7dcHhKtBfPYVlUbxR27jss0t8/Cd+9+ngkAnsuSSCbyrFQK9RcMgE+nT0+UwI+HTQp4Ov9K9Lpi/xo0wlWDpQiRrvBdF1tTQn/+V5pXzQCL41goNGHG0rw3eDRnQOXMbF/VuxsKioaLHBYMia+VWSqqqKwWDIUlVVcezBhv6LmOy/gOTdwyiYz/cf9eu77lmHNWAAAAAASUVORK5CYII='
      },
      {
	   label: '系统参数',
       oncommand: "openTrustedLinkIn('about:config', isTabEmpty(gBrowser.selectedTab) ? 'current' : 'tab')",
       image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACjElEQVQ4jYWSX0hTURzHz8UtNtFCIhKRuMTeBmGdtnt/52jcwJcwjVbn3iURy0JI2tw9LtSHaIKkQvSQBBqClI7FndtuD/XqQ/lvzbueeoyCXgN7iHoITg96p03BA5+Hc/j9PnB+vy9ChxyLsbrDag48Hxg+VdbJkzKj3zJd7U0IIalikHHHgD8uy5rsQ7h/1qtwe8YlzAuXK4ZypaTD35JBxUeDiooBSYQQcnR18lOUCpdVBn4kx+Z9kHojXBTTHpuKKK0r19VfGwYVlSgVjqF+sRir2yuoRKl4zoINNQJbQGJxorMTH3t/jbyoRKmoGOS7o5PhZU32bTK46ugws2nA7BqDuXQ3rkdybN6ncntL5cUtSFg/SeJlmlLauMog4Ohwo9yPve5c3l0KHE1ryEMpbcQY12ua5kEICQlMy9/eO9Kk9Nw92d7V2xRk6SNybN7ngpCQBEKSo5O3KwZZWYh0nAMAP0JI2v7CUFEAXxKE54Ri2mPKUGFk71yCA1ZzKUpiGwYV6wYVawx+l6IkhhBCewR5ASlbqLyYrhX03Zs4vcrIj3WDiupgI6EL/wt2ivcLbAE3JwL5Hnpxjamfd7YyXQ0M7p/1hnlh0iVk5jvPJ3NamBcmVV6cUgczT7VIvJVS2mgB+B2dDC+zYMNu5LS0R+HFZJV4Xg0N5kNhs2Cq8cwwJF6NhtiDZkjl77g1IXOpu9pfGySVF9PA86OE5wQxLUF4Tpy9n21Rhopfd8NWsHfapQOTqCYWHrnNkLJFcMBqPkAgaZrm2ScgidfjkMg83N7K7hprBQDgxxh7EUJCaktm5bZkVoaBuUDH7WcnwrceH3ff2pJZmTGr7kx8sdW9077pFoyxV9M0zz/jI4Zi+Y1olwAAAABJRU5ErkJggg=='
      },
      {
      },
      {
        label: '用户设置',
		    tooltiptext: '左键：编辑prefs.js,保存前须退出Firefox',
        exec: Services.dirsvc.get('ProfD', Ci.nsIFile).path + '\\prefs.js',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACNUlEQVR4XpXST0hUaxjH8e97zhlH72jXTTONVoRjRRFexOkGQ9Ey2om1KK+tWuRCg5ZBYYsWQQQtKpBWhdTCxpmQuwkXF8LNHWVs0eZyKXVRoUKbsPHPvL/m7XBkKgn6wMPh4eH58b7nHPN8cvLjZrXaKmsR9QQYPGMwxiz39fYm2YbJFwqqDfmZpaUlXk5PPz3b19fPdzxJOG/nF2q1yPzConu6HmfsyROSySTHc7nzzwqFpz8GEAoCn1hsq1yPYzyP5ZUVUqkUJ3K5cxPF4jPqBCAczwtqZYhYK5wDnZ28mJpC1jLQ34+kM98GKDqBhzGGiOfDp9VVjmazrohYY6gXbC14vguIGpfImh9Qqayh9XWcnTtaUCKxfYC7c7RsYjFMUxNvdqVBouPDe5y5dBuHmpup59WfwPMD/HgTfm35//Ruuv9+BPFGfBP+D2qIc6TwkLmubv0Q4Ac+QWOcWDzGf2176Bm9gX0wgt3cxAN8wG5sYO9e5Y/bVyh3Z4Uzns/L+VypqCJpJpWWRkdUHTqlmcxBrUuquLmVo1LHQVUvn5Ye39Kro8dU9xIDDCAEy+/wfmtBGDxCMoQMtVkzrLwHY2B8YkJO1VpZhUrte6Vrf0nXBzTT1q5IKd0ujVyQbl5UuedPAT3ki0VtZ25fRro1qHJHpyLlzH7pzrDK2WPhMmAej439k0gkTloJpPAzNjSg31s5fGkQbJXX9+/hHB4axiYSdJX+zQKzAAbIAK38mllCfAF+aBt61/+9iAAAAABJRU5ErkJggg=='
      },
      {label: '个人偏好',
		  exec: Services.dirsvc.get('ProfD', Ci.nsIFile).path + '\\user.js',
		  tooltiptext: '左键：编辑user.js', 
		  image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACI0lEQVR4XpXQTWsTQRgH8P8zO5tXio1IomeLX8CIGHw5FOxJLVVBg1RPIniQasEGhOILXr16FCnJoU02MdaKjfhGKAj9BgWTFokkBQVtbTS7jzNbR1IbBH/wZ/eZ2XlmZqlULn/uuG4/ex4Y3XRFEEQgotbI8HAcPVDecVhN4l+azSbeVau5MyMjafxFMDO0D7W6yjJq9WX99GttKptFPB7H4VTq/Izj5LY3wCYpLdj2n/i1RkKgtbqKRCKBI6nUuUKxOIMuEmBoQkgVguF5DG3fwABeVCrQ/+hCOg1mPr21AZsTCBARDMtirK2v4UAy6ccgMLpJUwhhmQYQBEghYLsdtL9+wUbHg7YjthN9Er0b6DubxQFLIBy0QBMVaHx/EGCAxsuQ4RC6ie4TWCoh20Y4HFSL5/H22nFAkooN2CoWUL0yiNjkM97WQPq7SgQjAdDNOTwaPYrJVyuAywDRZjouMpU6Hp49hF23fzeZzudZa298Z/Z+MMYKfO/NJz6ZXWI5UWI1yPyzrbLBmh47lVviBwst3nP3OW/5iSAV5eO3NiJBAhEUAtScQSrRgPC/8YvpQoE1z3X93TSMOzxaqvHFUp1xw2ED1x2+9KTOl2dXOHFnjgHsR75Y5F4o85SvzjfYypTZkOp97GWDd5vFCj2emnodjUaPecyAiiBCSBJiQYGhhRBcD5g9uA7txPsI+mygcWsoCWDRXGmvSj/+z6IpfgFmOhcVEgMdKgAAAABJRU5ErkJggg=='},
      {
      },
      {
        label: 'About页',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAACvUlEQVQ4jXWUT2gTQRTGX2Izs7vptloR8RQTqqLFUtiDDKMQasy8oafSBkERqoVK0Zid2V2hXj0UBFEPYkDsXfC/HtqevKoHpbQXvSgqTbFeqh4EYT0km02XdmAuOx+/+d437y3A1itVLEKXiUpR9B4T6T8iQo9tp3McJ7P5M5vsA2cqwxgzD3Fum6heGTIIDRmEGfRvAkAKAAAGKgRGpncxxkzHcSzGmBlDTlT3UKmXukXtcU+5dt0S7loEiTZB7ysVXo2inrdQfcgPn8lxzu32BcAm+6jUS5bUYVbq0JI6NGQQUvRXKer55vZXI2BbJ9z3cHx6V+xGVqmF7kIEIRh8J6hG45sAACBNpDtuCdWIdd4L6MgnxRgz7VPVaxHEGL6U2yLYNOfc3luaOGoJ1TBkEFLpVdunxSJ0DQ4OZk2hvzdzUKPbQZ7NDBzhnNsm6kpT639uK6h0p01Ud6JMEuWkIsjHOwfOr9fzf9fv5g4DQJqiv9aC3SBCj4GBeiUKkaKejwh/5vZf/DWXv18pOb2fbvVfWK8X/v1+UNCxAb3Yfk3pPwKKenkr0M96jv2oFzYa9/pfJyFJkCn1UyDozRIMnneUlo7KeTd7sPSjXthIQjpLs6R6mS1f8aODHVToRtOmO845tx3H6eWc259v5fYlkydlfbrpxP02NDS0c1NnE/RnDBmEllCNvaWJo62OTSchxogqUPTXLKlDW1Svbe5sx8kQVE/ijlUNE3UlAUqTsj4dQbJSh92onsBAhcQSofqy6C51jkcrszUq9SKVejHOJB4jE723cOxsT7tXGGNmrnwun0V3yUDvIRHBVYL+t+TQGrL2xRZVz0J3wUT9BkpTvW0zrf+JxTm34eSl3QDFrnYpMngaQbLCvR09ABQnjE4nrXicTCv1FCQWQW+Wol62UK10i9rl7XQAAP8Br+swdtuf2JUAAAAASUVORK5CYII=',
        child: [
          {
            label: '命令列表',
            oncommand: "openTrustedLinkIn('about:about', isTabEmpty(gBrowser.selectedTab) ? 'current' : 'tab')",
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAzUlEQVQ4jaXSIU7EQBSA4S8j+sIFVpD0HIi9wC6CM+0FMFUILA7DDRAIVB0KheoFMKuK2OlmSLZTGl4ymWTe+/95M3lUIqV0SCkdajVVuGmaD/SrJQW8yWtRsouIISLGiBgLeIoN+ikfEQN252w+2K5ocpuZs2CcKbxChx53ZeIXUxF0OOIFDW7XCnq84QnPeF8jaDFkyWvupPuroMUnvgrJvdOfLAomeMh7e+ltNcEjvmvwkuAGD7iegy8J/jdI2JejvLScPne/4sL5+AHddkk+mzKKaQAAAABJRU5ErkJggg=='
          },
          {
          },          
          {
            label: '内存占用',
            oncommand: "openTrustedLinkIn('about:memory', isTabEmpty(gBrowser.selectedTab) ? 'current' : 'tab')",
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH3gweFgQ6Kx3ZJgAAABh0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjM2qefiJQAAAVZJREFUOE+FkztLw1AYhjNY/0DBuhjxUq2ggqNihVaJxg5ODv4J/S2Ks4MgREFF0EaqOAjt3mo2hQyS0YKXpRaO71tP9ORgkg8eaHK+5+25xVDr2stmgA0cEICnujtU+FwrH36slxxggX7ZHi0058AeaAMh8etVBNilO4gCtMG2VP4KjZQvFFEPuJUB/nulXBypieKkKwZDmdPmP+uyGsAZvHWt+Y3hG7EMOQC7oI8BXLM67UhA49Kcwh5cdVYXdyDMAg8I8AosBnDD/pOJ38AMOitLlc2Dx8KEK+6lHHLCgBdNUvFrD1mTSx11xVbeFefgVHIG9hnQ1SQVhi9UvQHzqDk37rRmxo5b07/wOS3gCzDEj+E5bQlpBGmbmIbDgKRjTIKOzYCki5QEnUx4G+OuchzszfXksPgC6B+TDsfYE5XDwoD6OfN0eMSEv/mOYz/T7pVhfAMlNSjBzVUmcwAAAABJRU5ErkJggg=='
          },
          {
            label: '插件信息',
            oncommand: "openTrustedLinkIn('about:plugins', isTabEmpty(gBrowser.selectedTab) ? 'current' : 'tab')",
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAR0lEQVQ4jWP49u3bf0oww7dv3/47OTlhxfjkYPL0MwDZ2XgNIMbfBA3A5yKKDSAYBjQ3gGA6GBxeICYKiUpIxLhokBhACQYASZecRxjAXUYAAAAASUVORK5CYII='
          },
          {
            label: '缓存信息',
            oncommand: "openTrustedLinkIn('about:cache', isTabEmpty(gBrowser.selectedTab) ? 'current' : 'tab')",
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABs0lEQVQ4jaWTP2sUURTFXxGSzi+Q+BHUQnSZ95SkHdh2miyMe+9JYZPNksZiTQimFCz8RzJ3ujBPsJ2vIGyRIrFM8ZgupU0iDhn02rgblt11BQ+c8v4e591zjTHGbByYpY601rrH0b1n0nqYSut+R1prGwdmySwSZdEbFnvDudMpi2soc+/+DhB7QmIHlLt9lmivm9kXLNEe5W6fxA5I7EnnbevOXMDMl3OnLE+UD9uK/qYy8zWAKwBDIuolSbJ8CxDXTA1/XFf0Ouq91xCC1nWtdV1rCEG99wrgLE3TVWOMMd3M7rJE/W5mdymzL+no6Ws8Ty/LstR5KstSmfk8juOV2whib1jcN37V/l4UxcQAgClIURTKzNtTf4D+poYQFgJCCApgaEjsgHP3mcQNWdwFg341TbMQ0DSNAqgN5e4HiRtybj+R2GNs8c9ZgJFHqutaAVz9U4RZGkdgcV8mVnnYVu/9QoD3XomoZ0a3QB8e3eWjxw/S9+sRtroXi9YI4Gscxysz25mm6SqAM++9VlU1LlJVVeq9V2Y+HxdpnpIkWQaww8ynzHz9x6cAdiaq/L/6DbRoFO5cdXo+AAAAAElFTkSuQmCC'
          },
          {
            label: '故障排除',
            oncommand: "openTrustedLinkIn('about:support', isTabEmpty(gBrowser.selectedTab) ? 'current' : 'tab')",
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHklEQVQ4jZWTv2siQRTH34zZrPtDd7JRg8IiyB7YmCZVqitTWoUUIlcGsU5xhYRDLFIEi/wpB4EjXWTezC52V6aUFEcIxxUSgsi7xt1MTHNXfJvhfT+89533gIiYFqKfCjFKKpWLf5EWYqSC4IyIGGgh+ijEZyJimdJGI1KuO0DbnqJlTdF1z+fNZt2sScLwJAmCU0iFGGWPPw4PPeU4NxJghQC0pVflONe3cWznECEuIalULnKzZc0QgLBQWCDAOjNLgJXk/BEBCC3rLoO8AyjHuUEAwp2dn7pWO9C+P0SAtQRYqXK5l4ZhhJw/IAApx7l6B0gbjUgCrLBQWOha7SBrUfv+UJXLvTybMIwk50+SsZf7OK7mAOW6g027a+37QzNMMzwslb7mY3lePwegZU2NsNbK9wdpoxEhY0vJ2O9Zp7NnmhGAVLE4eQPY9tQMTJXLvXmzWUfG/kjOf81brSDLxACM3wCue26as5Znnc7evNUKzEwyiDZHmDebdQR4lZw/pmEYmTMr3x/kgGr1E3L+jIwtk3Z7f/sbrxGAkPOHNAwjY+a18v3BxrxAAFKuO/6wB3h87KBl3SEASc6ftrZwjZw/IwDh7u73+dGRlQO0scq3cWwrx7mSAC8fVpmxpXLdcWbeHOE3UEFwloThiXko93FcVZ73RRaLE1UsTrTn9ZN2e9+s0UJ0danUBSJiSRCcJkJc/o+0EF0iYn8BuVi9441UyUkAAAAASUVORK5CYII='
          },
          {
            label: '遥测数据',
            oncommand: "openTrustedLinkIn('about:telemetry', isTabEmpty(gBrowser.selectedTab) ? 'current' : 'tab')",
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiElEQVQ4jaWT0Q2AIAxEOwuu4xb90yHQDXSWSjqM7nJ+SQhCrHDJ/ZDcS0mvNK4Kq6mkbgAzI5eIvN6YGUREkzrfBACASZ2fdcALICJVPwrXjlkHFAFfE6Th34A8nLv6BUs4AmoTHOfWB7BATFvIIU09SCHtRQpu+V2kx7HKwS1dt1A8JqtL+Rs/6HojeMztlwAAAABJRU5ErkJggg=='
          },
        ]
      },
      {
      },
/*
      {label: '菜单',
	   oncommand:'setTimeout(function(){ addMenu.rebuild(true); }, 10);',
	   onclick:'if (event.button == 2) { if (event.button == 2) { event.preventDefault(); addMenu.edit(addMenu.FILE); }}', 
	   tooltiptext: '_addmenu.js\n左键：重载配置\n右键：编辑配置',
	   image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAQlBMVEUAAADr6+v8/Pzh4eGSkpJVVVVERERBQUErKyscHBwWFhby8vLT09PPz8+2traxsbGhoaGgoKBtbW1ra2sLCwsKCgqT8ZvFAAAAAXRSTlMAQObYZgAAAD9JREFUGNPFzTcSwCAQxVAtGZzT/a/q8o/H9Kh5pejl/UdLrWWTxNO5K0qeCeyW1BmWKgllW0uQcOS0yzHbfy87/AR9dbQdjwAAAABJRU5ErkJggg=='
	  },
	  {label: '按钮',
	   oncommand:'setTimeout(function(){ anoBtn.rebuild(true); }, 10);',
	   onclick:'if (event.button == 2) { if (event.button == 2) { event.preventDefault(); anoBtn.EditFile(anoBtn.file);}}', 
	   tooltiptext: '_anoBtn.js\n左键：重载配置\n右键：编辑配置',
	   image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAQlBMVEUAAADr6+v8/Pzh4eGSkpJVVVVERERBQUErKyscHBwWFhby8vLT09PPz8+2traxsbGhoaGgoKBtbW1ra2sLCwsKCgqT8ZvFAAAAAXRSTlMAQObYZgAAAD9JREFUGNPFzTcSwCAQxVAtGZzT/a/q8o/H9Kh5pejl/UdLrWWTxNO5K0qeCeyW1BmWKgllW0uQcOS0yzHbfy87/AR9dbQdjwAAAABJRU5ErkJggg=='
	  },
      {label: '快捷键',
	   oncommand:'setTimeout(function(){ KeyChanger.makeKeyset(true); }, 10);',
	onclick:'if (event.button == 2) { event.preventDefault();KeyChanger.edit(KeyChanger.file); }', 
	tooltiptext: '_keychanger.js\n左键：重载配置\n右键：编辑配置',
	image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAAAAAAAAACDY+nAAAAAAnRSTlMAxOqay5EAAAAiSURBVAjXY0ADUqtWrWRQYGBgYlACAgyW1ioIC0xAFKMCABYYBwHv+ZZuAAAAAElFTkSuQmCC'
	  },
      {label: '鼠标手势',
	exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\SubScript\\自定义鼠标手势.uc.js',
	tooltiptext: '左键：编辑鼠标手势', image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAkFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDIYgjAAAAMHRSTlMA6kEK4JpdD/7v2su9q5Z5b05FJyAbFAP208K3r6SAZzsxBtbOxbmxpp6QhWJaWSwB0NSsAAAAm0lEQVQY00WOhw7DIAxEzcreTchuRvf+/7+rQYRY4ux7xtKBrqL3vTZ1wVSdBB9ZL4/gYMAzYgAhgMOl9jNXfz18r1GD/g0GMFKiuk04YUdLBc+w00s+EnLugiZMszuCb4xSzfTHcBnhnA9gq7iiLO0OJqFi+dKC2FEqjpuvfJ2+JFvkwawcrskquhUMIUleZKeYgT1Ob1FC9fgHj9IH8vwTbm8AAAAASUVORK5CYII='
	},
   {},
*/
	   {
        label: '配置目录',
        exec: Services.dirsvc.get('ProfD', Ci.nsIFile).path,
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My4zNqnn4iUAAAMWSURBVDhPjZJ7TJtlFIe/GA0GNExNvO2fXaIzxoXMZbiN60azbCFDgYakSXfRqJi5BGo7bkVgYdkYIlNEKRgsIyGFQTCgBgZzyFVl4zrGKLbljqQEuTNooY/v15FFoyae5ElOzved3/ue33mlXsPh1u7cALpyDrqR8568Q73S/w25AacF7vc/YM1MR/Y+Oj8/IMT86DMEM1B4hMGiY27MgnuFRyv7vj7yiFtAPhXnEI5BvehNxvVHI6wIoVUzuKzM2OpJCd9BRtRzJIc9S0LYLtqyA7j3zVHfTQE/WP6Vtb4PBGdwDJzDYUln3ZYOv3+C5tAzmLTbqb0URFlSEBrFNqJ9t1B13s9nU8AfFn/CaY7BYdaKm2hF/hEbFh1MJfPe3sco0b1KzeXjlCSFk3B8D5E7PfjNqKCvQFEpBIQHi7W4huJxDetxjehBZiyFqR9UqF+TuGWKpv/7RKZvZ2H98WNCX5SACXrzgpC6vggUM1djqwinPXPfQ25l+bLQdhptyFNgL2G2OxvrzRR6vtWI2laYa6Yp8+AvUveXwaxaP2OgKATWxTbEFtzImxnRsdBxhsGaeEYbUkVzLLU5StaGDcy0JmOK36ORer46jL1Fw+SNs7D0MxtjmbjGs2BSMKHjbm8u5aVXaC6OpjTjLdJS3sc6eoNRYyDCwqelnrwQrBVRLJs/hZmroilNuJ/KrPUi7xS0kfjdEu0tVTQZT2DU+3Pxgo60uhVCM5pn9meNPSpeogK3D2vXYD5fzHZFmHoZ3/R+6vvv0z6xjn1VPAmXKC8tc2d8ls4pFy2WFd443+WUug2KefkWtkoVlvIobOWR2CuPEXjJwvW7i8TVzKGvm2PDsczC7DSJ1+eIr53n5sACu+Na5DEknyTVK6d0ypfVusiX1NqInap3Fc+/uSuuk9yGad4uHkFtHEFV+IATIpdrhkY7Oz6scwvI4SXw/Asenup61IZBNGVjxJYKTJuIXFM2zsl8My+crn4o8I943C8hxktZ5vSKNOEZ8Xfk2hPKUueTAediNn//1/AWvC7Y+x+Ib5L3n/LzYGB0uqcUAAAAAElFTkSuQmCC'
      },
      {
        label: '清理加速',
        exec: '\\chrome\\local\\speedyfox.exe',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My4zNqnn4iUAAAMdSURBVDhPVVPtS1NhFL9ZCQVl/Ql9rK9Cuy9lkYppJGa7bb18CALLnLt77r0rXR9W0MqiLMUiKk1yptts210FKVm+lO7OyFFBRKvMEjGQchpG7m6dc9usDpzt3uc5v985v3POpf61goKtS9j9R3M4oX0fQ7zNjOzvYeRADy0q1xm7wm9werMzceArwFfqQDR4yeIsLUZa6PxMC55vtBRwm051nEGnpWAbIyvT4ONAuBNiV4Hn4P8imBHcdgAvGE80188PkSYtIkylIiSFroXJ159h8YrZ2V5H2zwLrLWtNk2SpZfDVLWWI/h0/YVjCVWYBPCCptq6kiM2gq6pxAfnC7MD1inXxXPHdRL57g49e17ZwdUs6Rgrd7RcToRtEwCcSIWlXP0ybZjplbeCnem3TsT7rJO7ne7zBjk4pveEsbTxLPHE5wbJZS0saMkRsjFqYitH93KHUxSFzcpKl5vzputIXmJY0OafipcYUfnOiKEyirV5rjJS0Ac6P2kR8hAzvuY3ZL8wcS9fmNlH7bvy1iM4TZKlRWz3INE4IymdtKQ0UQYpcK+o1l+nN0wlJ/WawZ7zm3NVnvs1bOJmeo3cIQTjeTJic2BsiaPLBQQPKBhNqLDmDwHoP4VBGIwZ+/hNLtXEpUbNXCpq5tzPK3KXJ1XxBMYWO3xnaTl4n6JlpQHm3KWpwjvo/uMMGDxnT1HBmlETNwRgJEhF93I7QWY3yH2PslnhzjUKHnYYRCX+45l8JqmS1IdQJS7KouaocfM6AH+EKmJxpaIcwMnZQeksNp6tummmtjifLAMZb0scnRfjfdUfZvqrv30MHSlDMMrJWHJELIQKpxPDtljJ8dYGGP37/F0H1uqXjOjPx+UgdY32+IA1llDJZ/3iHwOJY4mw8E6qa5Rw6VhLc6meBH5w1qtYy61qJNle463/0ltTmsYt2qfu2tJie2sDghnrbWGxQnjAr0rXDOu5DeUYZGUWFsXPyEEXzPs0fJV+mvjmWKEjxh1twR79lQcvKxGcOeR571KDFCoGonpaDASBJMRa71zZZLnBo+b/wBRF/QZMe7QEilvzIwAAAABJRU5ErkJggg=='
      },
      {
        label: '一键备份',
        exec: '\\chrome\\local\\BackupProfiles\\BackupProfiles.bat',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsElEQVR4Xn2TS2hVRxzGf/+ZOffOPefemIbGt31cbLZqSx8ujKYJ7rJRUkpKEVy56UZaiuKiK8Gt4CILF0rBBDGBipKNS9FFoqklbZGSNNUS8Xqbt9eYe2acc1RcBPvBd2bO95/Hbw5z5MKVqzjnPvHen3HedeNZLwEl6oaI/KiUGgeQV1Zh8kAURWMdH3V07/30C7r2d3Gg88Br5+9ZntWzcdl4AYwCqz1yfmjE79n1MXgIBPj1BMhLAhCYuHcHa7QkBvrvxpiAzoc7tjK3uMT8wiIuTXmDCAhordmwoUJb8OS9cRLt+XYiocV4jCjh9tg4O6sfsHVzO0nJIkBRC0YJCKw2VsPiS0xO3KFs4Juwc5JPJliEjOLvmYcUoiLWFmlNYk7d/JfLv82CJzcioBSYIrFZ800RjKh5IwhaKYzWaB1ao7HBlycfcev7Xp43HZ3bDG8EN2dT4oLm4LnRVjX3X/3a73/e51GtxvLKCkoElaMLRUnp+nma+twCg8NXM+f9zotTaNfEOY+JosJqf18ff01NMzv7mJmZf1iKiwDUGo5NZU265vh87z6ArJ9ntWcpCJikXD40NvFr/hGr1fcplyxWA9d/Yb6RsjE2jM6ssn+zAWD0YTPPFhoOBRgE0jRlavoBxUKBkrVsbEkQYLHpabOagftNzv7RxOOxWkKmWAgkOYEgIILRCq00KrRKMgsrzx0tRUV/1fDV7nbAMXi3xqVpF2oeAdRcvT78pP6E5cZTUucw2gRrRAnPnFApRfS8Zzlx8icePF7my20FKtaEGghgjh87evzrI0dH9nX1fFeK488En9+0SJcQ0Wwp23ADC2x5t8ymVov2ayEzIDqnzP/GI4d7Y2A7UOGVKj8MnS5VWg4672l6hRfBO494h1EQKcEIS8LbVQXe4f+VvgDxAgJThZVz8QAAAABJRU5ErkJggg=='
      },
	/*{},
	{
    label: '火狐账户',
	accesskey: 'S',
	oncommand: "gSync.openPrefs('menubar');",
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADcElEQVR4nHVTXWxTZRh+zzntOafn9Gdt3enoz8po2dauMLYat6iom5OpCwMGmswrLjRecAGBkDkTkCtCiDeQaGKCF7vQoBL0gpARJyFTxCDQwqA/6Nba/bU9Xdedru1pe3441Y2MGJ7kTb683/c835PvfT4E1jB66E2zQ2/4WG8wD+KUzmgwvsCwqYWSUC4VVSKXZsz6B6HH8c+OnPslBRuArS8yCzGqu9075vG2tkp8zhwLXieTM0HdcipmSubKlv1793Q1O5kjO1u08nfXo5P/Ezh/bOh0y9bNfdmFx8AmQiBUy4ChKFTxhspAfy9eb9ICRWCow2rqfcOjt34zEb3yVODCSM9Aq8t+vlLioLiSVjoIEFojqEmtfPt+5F5yOkgE7tymljJpqDfqwLmpzv+iiwpfmow/QmsCjYzxKzUiAggFIEkCArH83G+h9JiAGVJ3Zrh9uNpkUxH4udzyMvx6609IZ5Zg21b7F7WbsAuf9HXsaLYdl8QKIDLA71MJ9tufA+2hxeSP2z3t5MXxwJUbIVacCC6N7+5u7K7T0e4iXwUrU6exm/AfVEaafI8kcUVMBgRB4G5k/uzfSWBrzkY+v3hq44trCOKMXke/TRI4rBYqyA6P/SBKooJP2QCNYp3AcQhPZ6/Cc/Aono3ptBTUSo0TgKtU9agoVUVRFoE2bQKDmYF3X201P0+gKsrv6LQ0/FcUZLjSFJpcKl+ORKJA1VlBZ2uHXT0vndxIOjzUNliblt8P6ja3daRGpCgSaJqSI3H2Kpb/IxHydpo/RRAJtTZ3gaO5Y8vwK0z+y+9v3lKI6Ae97gkCFfS9Ps/Z9/v9XprSQKEkQI7jY/tGL5/E4gBSf5ezMfzwfudKJgFN23ZCQ9uu/pHhzuEOO/gseqxn4HXfa2+97LNqaQ1kuRJUBFEOhGc/unQjGkbWE/n10e7p2bk5Z21Em5tcYHe6gZ2bWTVoMK3DYYEtThtwRQHiC1lYzhXGDpz46SD8G7k1WCxAjw75g8nFRffKagkaLPW8BhXIRpsVXC4nJNJFKPIVKFeF8Idnrm1XKMIzf6FQAPnuP8I9iqI5bxNjL/CSSlKRMsej0oNpVszl+TxfFVO5QuVmdDExns9D9RkHa1AxDOOUZdmGYeBCAXHUzoiC9JcS9HklaPMsy8aUnrhOeALXrFu6bGkawwAAAABJRU5ErkJggg==',    
  }, */
    ]
  },
  {
    id: 'userChrome.js_menu',
    label: '脚本管理',
    accesskey: 'U',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACW0lEQVQ4ja3R4UsTcRgHcP+i/oM72t0a3dBBhnk1x3beHSKlF2RSyCJH0IsgiCASGi6CXhhzLBurdT9d223z9GbLOd3YurijhPJ0zs0m4vH0Rh3NhKC+8H37gef7dHT8j1AUBQ6HAwKBwEOEUM/09PQYwzBgs3eDwOBgfreCWSJP9AQwOTnpi8VijlAodN3j8TQpyg48c3Gvvv68ZJQnykZ5oryhThXNAlH/S4ACpp9r/KgepFS9Kqt6Va58PZDMVdvmqQBCqCscDgtHAMdxu4ZhzGuapmiapqh6M2MWiK0/An6//340Gu0JBoOjRwDLsbtGbTOj6/qipuuL6rf9tFkktsxKG0DTNDAMAzzPw+DgIDidTug8Z4OBPtdPba20VFKyy5+VpeWiomXNBLFtpokWgFsccKGbBqfTCW63G3ieB7rnEgiYBe5hJDzASHiB2SCJn4ciboca3gkm3tUCfDdw8I72NW6P+fa9Xm/j7vh49ebISG3oEHiEWY+BCm6HRjtgGlZYzwnFuQ+FtWQyqUiSlIjPihkBs4API+EpZjVeDwxHEuxVMccNiSo7LBr9Q7Mt4AsJJema+ua9nEAIzYuiKL+NRhQBs8AdjITAZbcs5vNnosnk2ZnDhlIp20kglk2Joii3A896XZ/eLSx0BRFyBePINRVHrldziPsNKCRulUNRNR6JKVIELUnhmczxCU8wsj51hfk4S3tWZJpdKdPsykYvu9oCKiSYeaLZzBK1vRyxs5cjdrbTlrrQNmIKp04ZsUSCWWlrnjx+42PMCi8xG2QOgXo78C/5BScK8swZt9PZAAAAAElFTkSuQmCC',
    clone: false,
  },
  {
    label: '样式管理',
    accesskey: 'Y',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABuklEQVQ4jY3QT0iTARjH8W+vhhkkbSayLjIYIgbiyxi4QqegwVv6evE92alAKuvgaUkJOxSKoBeRnXZQOgQKG2QiROHQi/Ji2Bi4w0vQoYPIIFp7L7LHgxnv5sr3uT58fs8fcFHHbxksLpE7ipP9PkcyG0N348rwcfZOUb4NlOydUDHzpv5g8ylD7nHmdlFyvSJfwyJ7Ifn5qfP3xiNWXeN8WpWPUWQ7hsiuKqW9UCk1yhdX2Ex1SzAYFMuyxJxBZKdTDtduFVYM9l3jaDQqhmHIr42AHL5vL6wY7L8bQbtwbSfOrob/4vVIFQxQebNlWefwwkiTlmhrC1uQ3ILesoCjOAdObM5QtnbyCZqu64HnXV2vJBaTFKQdvCEA3rH/4fVlIpqmPbNtW/p9vvkE3C3D+XxeTNP8J07G+WD/mBS/3z/l8Xg6HNMd2LSktrbldeoBmWp4cYrP9yNX+ire5x1zYmhRzzqVeHqC/nPfV5TG8Wp4aZLWCzFwVVFuvjjF3gGgGWgCGmcfMy2FnCy8JD06xCBQB1wGaoBLZwE3TvH1YUAFOoB2oBWQh/dY61HRAS9wDaj/E6IAnAAi5kpUa0OHiAAAAABJRU5ErkJggg==',
    child: [
      {
        label: '样式目录',
        exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\CSS',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAatJREFUeNqkU7tKA0EUPbM7boISNKhBsLRQ9AMECx8EEQstgqVgL1iYyg+w1UbwC6ziA1TyA7FKjCKiYCGihSAIikiIJptZ7527amIjmmWHnXNn7jn3tSoIAjTzOGjy0cerI2umZtKB+VskylFwXGdds/Pw/AzgG8ByKHrV901OUYV2i41stYP81mFaW+X3MnC5IZctgabkaBmfbDWWo9VCe18WKw0tgX21dfJfgbE9IJEUlccjIJcKbWNi200Ao3X4fNkKasvml8R5p5OUSSn1IPXly9txCreNoCc40wG0tAJ9czZV6UJQEVavHYh2A9lB2sfENr4PuKTjeoInDmhPIqZS30Y/7EkkXFEhyA6QigvM3oo920+XGN8RQcmm4NiicWVtoSkd8wZMnRK1K0T5BTnjCBgXQmyqoilVp91zEZi+ksPnEyIg7skzwU9FiSBZCM+LX63VtkWc48UKfalY1Rdpo0fFyyXDvruNmKOL9dj2ap4oRIgkiMscRLuk759DZIXUDwzrw7765rG8icz1YuMoq18GObDO7Ms3KRb0/vNfulfN/s4fAgwAwWWMUVTgPhoAAAAASUVORK5CYII='
      },
      {},
	  {
        label: '界面定制',
		tooltiptext: '左键：编辑userChrome.css',
        exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\userChrome.css',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACh0lEQVR4XpWTTUhUXRjHf/feuePHWA1hFmiUhUpChTVlIi2yTYs3GFq0aOGiNtmiTbR0lVbLF1elxJSh8fKOMyNZCGNSi6Je6TXIyKJRLCNn7uiM86HzcWdOw+UyDShEP7g858J5fs//wDnS6OPHET2Xs4t8HsFGZElCkiTtnNNZw2aMeL3idwSDQeH2+oYp4b+e9tWp3vZx3B6PIfgcmBWB+TnzC4i5+QVD8HBoyKhLQU38Mzb5YKr7oP3/m21fE8Ot4vWN9rgFk5QewlZmpCSjx6gqrwVAlmXCK1F21lTT2rirc/WzvfPgnjWmP5ZlT3S/PGkBCYB1PYxVLceiVBBPL2K31QPQ2HQA/4tX2MLTHEh5OVSf58OsQu/onBN4J/9KoBFOzCDIFmQhVNVKMpXB0XKYjh1hWtQnNOzXWfiUos+/dN4ztTQBUBSsZ0Okcst8XXlmyKxqBXoOPg5epWx5gN3VCYLvI3you0L/5OIYkAGwFAW6hipsIAlyIkVlpcqAa5At28/i1J6yuhxBd/QUBjUb2zGRQQIgmdFYy2pG/FRSwfXgEQ7HYZx/neLv1euE9l6i9nQXpOOUYpGKCX6QpwoUnfy8kyNH6mlubuBft5vZmbfsu9YPgMjrlCJjksz+IFaQRPXvVG7dRkNTEyMjPvwTfh66+hG6jmkAYMMRsvoKHcoxunQnZ5S79N25z7h/kkHXPfJ5gRDA5lddxRBYNabTHmLxIGuxKBe4XZh8FwMEimKGlSRKsajyVgJRF9YcfImGGIjd5+x6I3XHLwMUb+OGtYkcsd3C9+YiqQiko/AtnGEwY+V5vA3P6Bhur5fCezGqx+cjmUi8oAQJOMqfEQUCmPwEtFNY6VlzWBcAAAAASUVORK5CYII='
      },
      {
        label: '网页样式',
		tooltiptext: '左键：编辑userContent.css',
        exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\userContent.css',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My4zNqnn4iUAAAJsSURBVDhPlZNfSFNRHMfvk9BbEP2hPw+xHkQyzJQoFQp6KKGghx5iRmmhREEhFZLT2lyRFCZBMyuH02k5d3fnMDZsMUc2uHG5ZTdSk1tjIKwbcmlJ48bo2zlnc5El0Re+nMPvd76f84d7uYDfrws+H/jh4WVN+hq3nOiCfymZTELgvYO5CFOlTfxCHMoDZt7NQlXVvOMfP7B6v8vFRu1TEuGRR65tzeLKXVelxM5rKVRYY1/zAPH5NGamVGZZnEUikWD1Abcb8581Nn/7XkWVVUa5PYOKNuk7OUgJx3uzgBCv4JWoYupNHEEy17Qkq8vSSwQ8brTdF1DWPI1SO1BmVbCu/HA1u8si4PE9GV7nJBQ5jgGHDF3XkF5IsV7viznstsRRYgGKrCo27q0/QqIFvwG67BKct2Q8JHbYJBhGigB0nHEpqGqdR/FlYFPrHO70BUBiK1iYahFw/VwMHU0iOpsktJ8X8QMZ9PZ0Iejvx5aWFFa16Lj7LIHIqJcCfknweRng0tEorpyaQGttDDcaI+TxHrD7G98W4Oiw4eLgNFsXEPglAMHHGrV7wjh7MIrT+ycgCE5MvpaQTqcJqA8nj5uBTIat4z1DfwccKgyipjQMc3EEkbAHRjrFwieO1bC+YRhs9Az9AcheoXJ1AA0tCixPDZh7dHR3tqG+LhvOkN2XBTwZ5VmjjBtD4ZogGtwaDtyeg+mCyupUFEBNRT+8XDSr8agfI855FHFBmLgBrC3oxtZGBTdDOgssFf3xctGs6qrHWHgzCW/gHFjP2bFvezuiYT97cbojPTYdqcm/MZ6L5rXjP20izonjfgKVr3Lrdxs1wQAAAABJRU5ErkJggg=='
      },
      {
      },
      {
        label: '菜单',
		    tooltiptext: '左键编辑',
        exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\CSS\\菜单.css',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB30lEQVQ4jbWTv2sUQRSA317uhAscEW0sbEwgNocQppBhLEY8bAS7xcZckQvHebe7Mym0EIRrok20SKGCFyVLLnszC/6A88wlm9ndUg7/AAuLs7Oz0Hotkl3uwkiw8JXD+958894bgP8YBqU0v3Xvw+U6QgUAMP4JxhgXEUKzrjV80l0L5p+ZsqjL08E5QkipUkFzhJASAOS2q2/PCx7vSaZunzQ8FQYA6NT2zvk8Gkhb3Urzjg0LUzo6uOeEq54V0okn5AghJYTQ7KSBgTEuUkrPvmq+r7qNYfnoOMlJFn93reElwcK7bmNYTi/BGBezHlBK81t1/2bX/jQSjvrasw8XAAB2WwH2eTQ6MlH1Ltv/5bYGcrPWWZpq4C4P+l37YOxxtdKm7UxLOtFT34kepNrt6uPF7dbHl4Kr34JHm1kBwYIv0ok/e466kUBiAAAkkBg+j8av1/rzqXbTvH9BMPXQZ/FPn8ciK2Cackay8I7k0TefR+HO6uCi11JXfR6OUrjTeLcsmPohnFhJFl7TzR+kKc9IFlqefbAkWLjxptl/lE6lxw4t4QTXteDJMMGc2XH2x+vV51cmR6oJ/SZWKubceu1F+TRYt4nZH5iaswbWbiKlNI8QKhxX/is8mfcHpqy/6mirZYQAAAAASUVORK5CYII='
      },
      {
        label: '书签',
		    tooltiptext: '左键编辑',
        exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\CSS\\书签.css',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB30lEQVQ4jbWTv2sUQRSA317uhAscEW0sbEwgNocQppBhLEY8bAS7xcZckQvHebe7Mym0EIRrok20SKGCFyVLLnszC/6A88wlm9ndUg7/AAuLs7Oz0Hotkl3uwkiw8JXD+958894bgP8YBqU0v3Xvw+U6QgUAMP4JxhgXEUKzrjV80l0L5p+ZsqjL08E5QkipUkFzhJASAOS2q2/PCx7vSaZunzQ8FQYA6NT2zvk8Gkhb3Urzjg0LUzo6uOeEq54V0okn5AghJYTQ7KSBgTEuUkrPvmq+r7qNYfnoOMlJFn93reElwcK7bmNYTi/BGBezHlBK81t1/2bX/jQSjvrasw8XAAB2WwH2eTQ6MlH1Ltv/5bYGcrPWWZpq4C4P+l37YOxxtdKm7UxLOtFT34kepNrt6uPF7dbHl4Kr34JHm1kBwYIv0ok/e466kUBiAAAkkBg+j8av1/rzqXbTvH9BMPXQZ/FPn8ciK2Cackay8I7k0TefR+HO6uCi11JXfR6OUrjTeLcsmPohnFhJFl7TzR+kKc9IFlqefbAkWLjxptl/lE6lxw4t4QTXteDJMMGc2XH2x+vV51cmR6oJ/SZWKubceu1F+TRYt4nZH5iaswbWbiKlNI8QKhxX/is8mfcHpqy/6mirZYQAAAAASUVORK5CYII='
      },
      {
        label: '标签栏',
		    tooltiptext: '左键编辑',
        exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\CSS\\标签栏.css',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB30lEQVQ4jbWTv2sUQRSA317uhAscEW0sbEwgNocQppBhLEY8bAS7xcZckQvHebe7Mym0EIRrok20SKGCFyVLLnszC/6A88wlm9ndUg7/AAuLs7Oz0Hotkl3uwkiw8JXD+958894bgP8YBqU0v3Xvw+U6QgUAMP4JxhgXEUKzrjV80l0L5p+ZsqjL08E5QkipUkFzhJASAOS2q2/PCx7vSaZunzQ8FQYA6NT2zvk8Gkhb3Urzjg0LUzo6uOeEq54V0okn5AghJYTQ7KSBgTEuUkrPvmq+r7qNYfnoOMlJFn93reElwcK7bmNYTi/BGBezHlBK81t1/2bX/jQSjvrasw8XAAB2WwH2eTQ6MlH1Ltv/5bYGcrPWWZpq4C4P+l37YOxxtdKm7UxLOtFT34kepNrt6uPF7dbHl4Kr34JHm1kBwYIv0ok/e466kUBiAAAkkBg+j8av1/rzqXbTvH9BMPXQZ/FPn8ciK2Cackay8I7k0TefR+HO6uCi11JXfR6OUrjTeLcsmPohnFhJFl7TzR+kKc9IFlqefbAkWLjxptl/lE6lxw4t4QTXteDJMMGc2XH2x+vV51cmR6oJ/SZWKubceu1F+TRYt4nZH5iaswbWbiKlNI8QKhxX/is8mfcHpqy/6mirZYQAAAAASUVORK5CYII='
      },
      {
        label: '导航栏',
		    tooltiptext: '左键编辑',
        exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\CSS\\导航栏.css',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB30lEQVQ4jbWTv2sUQRSA317uhAscEW0sbEwgNocQppBhLEY8bAS7xcZckQvHebe7Mym0EIRrok20SKGCFyVLLnszC/6A88wlm9ndUg7/AAuLs7Oz0Hotkl3uwkiw8JXD+958894bgP8YBqU0v3Xvw+U6QgUAMP4JxhgXEUKzrjV80l0L5p+ZsqjL08E5QkipUkFzhJASAOS2q2/PCx7vSaZunzQ8FQYA6NT2zvk8Gkhb3Urzjg0LUzo6uOeEq54V0okn5AghJYTQ7KSBgTEuUkrPvmq+r7qNYfnoOMlJFn93reElwcK7bmNYTi/BGBezHlBK81t1/2bX/jQSjvrasw8XAAB2WwH2eTQ6MlH1Ltv/5bYGcrPWWZpq4C4P+l37YOxxtdKm7UxLOtFT34kepNrt6uPF7dbHl4Kr34JHm1kBwYIv0ok/e466kUBiAAAkkBg+j8av1/rzqXbTvH9BMPXQZ/FPn8ciK2Cackay8I7k0TefR+HO6uCi11JXfR6OUrjTeLcsmPohnFhJFl7TzR+kKc9IFlqefbAkWLjxptl/lE6lxw4t4QTXteDJMMGc2XH2x+vV51cmR6oJ/SZWKubceu1F+TRYt4nZH5iaswbWbiKlNI8QKhxX/is8mfcHpqy/6mirZYQAAAAASUVORK5CYII='
      },
      {
        label: '地址栏',
		    tooltiptext: '左键编辑',
        exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\CSS\\地址栏.css',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB30lEQVQ4jbWTv2sUQRSA317uhAscEW0sbEwgNocQppBhLEY8bAS7xcZckQvHebe7Mym0EIRrok20SKGCFyVLLnszC/6A88wlm9ndUg7/AAuLs7Oz0Hotkl3uwkiw8JXD+958894bgP8YBqU0v3Xvw+U6QgUAMP4JxhgXEUKzrjV80l0L5p+ZsqjL08E5QkipUkFzhJASAOS2q2/PCx7vSaZunzQ8FQYA6NT2zvk8Gkhb3Urzjg0LUzo6uOeEq54V0okn5AghJYTQ7KSBgTEuUkrPvmq+r7qNYfnoOMlJFn93reElwcK7bmNYTi/BGBezHlBK81t1/2bX/jQSjvrasw8XAAB2WwH2eTQ6MlH1Ltv/5bYGcrPWWZpq4C4P+l37YOxxtdKm7UxLOtFT34kepNrt6uPF7dbHl4Kr34JHm1kBwYIv0ok/e466kUBiAAAkkBg+j8av1/rzqXbTvH9BMPXQZ/FPn8ciK2Cackay8I7k0TefR+HO6uCi11JXfR6OUrjTeLcsmPohnFhJFl7TzR+kKc9IFlqefbAkWLjxptl/lE6lxw4t4QTXteDJMMGc2XH2x+vV51cmR6oJ/SZWKubceu1F+TRYt4nZH5iaswbWbiKlNI8QKhxX/is8mfcHpqy/6mirZYQAAAAASUVORK5CYII='
      },
      {
        label: '侧边栏',
		    tooltiptext: '左键编辑',
        exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\CSS\\侧边栏.css',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB30lEQVQ4jbWTv2sUQRSA317uhAscEW0sbEwgNocQppBhLEY8bAS7xcZckQvHebe7Mym0EIRrok20SKGCFyVLLnszC/6A88wlm9ndUg7/AAuLs7Oz0Hotkl3uwkiw8JXD+958894bgP8YBqU0v3Xvw+U6QgUAMP4JxhgXEUKzrjV80l0L5p+ZsqjL08E5QkipUkFzhJASAOS2q2/PCx7vSaZunzQ8FQYA6NT2zvk8Gkhb3Urzjg0LUzo6uOeEq54V0okn5AghJYTQ7KSBgTEuUkrPvmq+r7qNYfnoOMlJFn93reElwcK7bmNYTi/BGBezHlBK81t1/2bX/jQSjvrasw8XAAB2WwH2eTQ6MlH1Ltv/5bYGcrPWWZpq4C4P+l37YOxxtdKm7UxLOtFT34kepNrt6uPF7dbHl4Kr34JHm1kBwYIv0ok/e466kUBiAAAkkBg+j8av1/rzqXbTvH9BMPXQZ/FPn8ciK2Cackay8I7k0TefR+HO6uCi11JXfR6OUrjTeLcsmPohnFhJFl7TzR+kKc9IFlqefbAkWLjxptl/lE6lxw4t4QTXteDJMMGc2XH2x+vV51cmR6oJ/SZWKubceu1F+TRYt4nZH5iaswbWbiKlNI8QKhxX/is8mfcHpqy/6mirZYQAAAAASUVORK5CYII='
      },
      {
        label: '查找栏',
		    tooltiptext: '左键编辑',
        exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\CSS\\查找栏.css',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB30lEQVQ4jbWTv2sUQRSA317uhAscEW0sbEwgNocQppBhLEY8bAS7xcZckQvHebe7Mym0EIRrok20SKGCFyVLLnszC/6A88wlm9ndUg7/AAuLs7Oz0Hotkl3uwkiw8JXD+958894bgP8YBqU0v3Xvw+U6QgUAMP4JxhgXEUKzrjV80l0L5p+ZsqjL08E5QkipUkFzhJASAOS2q2/PCx7vSaZunzQ8FQYA6NT2zvk8Gkhb3Urzjg0LUzo6uOeEq54V0okn5AghJYTQ7KSBgTEuUkrPvmq+r7qNYfnoOMlJFn93reElwcK7bmNYTi/BGBezHlBK81t1/2bX/jQSjvrasw8XAAB2WwH2eTQ6MlH1Ltv/5bYGcrPWWZpq4C4P+l37YOxxtdKm7UxLOtFT34kepNrt6uPF7dbHl4Kr34JHm1kBwYIv0ok/e466kUBiAAAkkBg+j8av1/rzqXbTvH9BMPXQZ/FPn8ciK2Cackay8I7k0TefR+HO6uCi11JXfR6OUrjTeLcsmPohnFhJFl7TzR+kKc9IFlqefbAkWLjxptl/lE6lxw4t4QTXteDJMMGc2XH2x+vV51cmR6oJ/SZWKubceu1F+TRYt4nZH5iaswbWbiKlNI8QKhxX/is8mfcHpqy/6mirZYQAAAAASUVORK5CYII='
      },
      {
        label: '附件组件',
		    tooltiptext: '左键编辑',
        exec: Services.dirsvc.get('UChrm', Ci.nsIFile).path + '\\CSS\\addons\\附件组件.css',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB30lEQVQ4jbWTv2sUQRSA317uhAscEW0sbEwgNocQppBhLEY8bAS7xcZckQvHebe7Mym0EIRrok20SKGCFyVLLnszC/6A88wlm9ndUg7/AAuLs7Oz0Hotkl3uwkiw8JXD+958894bgP8YBqU0v3Xvw+U6QgUAMP4JxhgXEUKzrjV80l0L5p+ZsqjL08E5QkipUkFzhJASAOS2q2/PCx7vSaZunzQ8FQYA6NT2zvk8Gkhb3Urzjg0LUzo6uOeEq54V0okn5AghJYTQ7KSBgTEuUkrPvmq+r7qNYfnoOMlJFn93reElwcK7bmNYTi/BGBezHlBK81t1/2bX/jQSjvrasw8XAAB2WwH2eTQ6MlH1Ltv/5bYGcrPWWZpq4C4P+l37YOxxtdKm7UxLOtFT34kepNrt6uPF7dbHl4Kr34JHm1kBwYIv0ok/e466kUBiAAAkkBg+j8av1/rzqXbTvH9BMPXQZ/FPn8ciK2Cackay8I7k0TefR+HO6uCi11JXfR6OUrjTeLcsmPohnFhJFl7TzR+kKc9IFlqefbAkWLjxptl/lE6lxw4t4QTXteDJMMGc2XH2x+vV51cmR6oJ/SZWKubceu1F+TRYt4nZH5iaswbWbiKlNI8QKhxX/is8mfcHpqy/6mirZYQAAAAASUVORK5CYII='
      },
    ]
  },
  {},
/*
	{   label: "开发工具", oncommand:'const { BrowserToolboxProcess } = Cu.import("resource://devtools/client/framework/ToolboxProcess.jsm", {});BrowserToolboxProcess.init();', image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAACj0lEQVQ4ja3UQUjbUBgH8EfxUIJSEClEmIikrRXJDBFGhqmvjMEYCLuIuwy2oZlHpTWvlLbaKVLNociQ0YNhRYvbRMG1WkmUngSPG8hwh+m5MJCkeNBG3w5rarR1h7EPcsqXX977fy8B4H/Wz/zwU11lLjSl9/xke6T/rj7vWJJsm1o9bkrkr7wR+UNNg64yF4ZKYUOlcEllyhbMBiG0syxLQAjtVDR9QEgF7I7K2bpv0pTecxMysaOc4Oc4rhlC2MJxXDMAwOac3igR87uYDi90m892xpZWqtDJ9kh/SWEMEyorFC5mGWPt3dAgz/MkhLCBDkpOx0zukpAKuCOWOewJL/a4I/KeYzZ3eWNVJlZWKKxvubCWc+FiljEONwU/HZSc5Nv1U0Iq4OqVUHHjnIrbI+mjmi3+yL95VNykDS3nwvqWC5cVCusKY3QlljUr4pj5YrROZjRPOLXPCmPkbcfGcVzz+uLzoeImbZSV68yG5ckq0jr16deDwVddPp/vnpndDQVCaIcQtvA8T37fGn6s79yvZnamePBAKnkD4XmerEEAAIBlWaIypQY6KDm9iWXttRzHZ4rnzyR33DgWF/wmAiFsqHsEIIR2AIDtdrADqSQu7bjxt4/95dHRkRd/RbxjSZKKpg+c0xslc8TWTGJxwS8IL5+Nj4+XJiYmntRFAACgbWr1mJAKmJjfxbcRayYIoT5RFPVQKFQfa0rkr9xROUuHF7o7YplDc8RWxNwOQughQsiKXQdu/QB7Q+8ZIqHi1smMdlewgUCgDyFkIIQ+V7KtLXdE3mucU7EnnNqve04qJYrimiiKOBAIrNXc7IwtrThmc5ftkfRR5cTWRUDlrxAMBjdEUfx6R8+/1W9wrXOgaaw0FQAAAABJRU5ErkJggg==",
}, 
*/
  {
    id: 'webDeveloperMenu',
    label: '开发工具',
    accesskey: 'W',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAACj0lEQVQ4ja3UQUjbUBgH8EfxUIJSEClEmIikrRXJDBFGhqmvjMEYCLuIuwy2oZlHpTWvlLbaKVLNociQ0YNhRYvbRMG1WkmUngSPG8hwh+m5MJCkeNBG3w5rarR1h7EPcsqXX977fy8B4H/Wz/zwU11lLjSl9/xke6T/rj7vWJJsm1o9bkrkr7wR+UNNg64yF4ZKYUOlcEllyhbMBiG0syxLQAjtVDR9QEgF7I7K2bpv0pTecxMysaOc4Oc4rhlC2MJxXDMAwOac3igR87uYDi90m892xpZWqtDJ9kh/SWEMEyorFC5mGWPt3dAgz/MkhLCBDkpOx0zukpAKuCOWOewJL/a4I/KeYzZ3eWNVJlZWKKxvubCWc+FiljEONwU/HZSc5Nv1U0Iq4OqVUHHjnIrbI+mjmi3+yL95VNykDS3nwvqWC5cVCusKY3QlljUr4pj5YrROZjRPOLXPCmPkbcfGcVzz+uLzoeImbZSV68yG5ckq0jr16deDwVddPp/vnpndDQVCaIcQtvA8T37fGn6s79yvZnamePBAKnkD4XmerEEAAIBlWaIypQY6KDm9iWXttRzHZ4rnzyR33DgWF/wmAiFsqHsEIIR2AIDtdrADqSQu7bjxt4/95dHRkRd/RbxjSZKKpg+c0xslc8TWTGJxwS8IL5+Nj4+XJiYmntRFAACgbWr1mJAKmJjfxbcRayYIoT5RFPVQKFQfa0rkr9xROUuHF7o7YplDc8RWxNwOQughQsiKXQdu/QB7Q+8ZIqHi1smMdlewgUCgDyFkIIQ+V7KtLXdE3mucU7EnnNqve04qJYrimiiKOBAIrNXc7IwtrThmc5ftkfRR5cTWRUDlrxAMBjdEUfx6R8+/1W9wrXOgaaw0FQAAAABJRU5ErkJggg==',
    clone: false,
  },
  {},
  {
    label: '重启火狐',
    accesskey: 'R',
    oncommand: 'Services.appinfo.invalidateCachesOnRestart() || BrowserUtils.restartApplication();',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACiElEQVQ4jY2QXUjTARTFTxsY6iC1LBPN1vpaKpFFkwXlR7aMKLWmhcis2DDULJhmpe3vTMa0Nt38HLqJX7l/+d1GzkxMp5jKQDCifIoyrKd6kBDi9pRIbtV5u9zzO9xzATfSTei85UN3JaLeq4WKV6Xq+AF5ut5l2enOu04pA4oC/0bRVxgEBI0PgQFBH0KcukiK7UnvlA0XCdyC7PwI70C7ZAzaTYRyfwpqS/iUYs/pvOxQmvdZk1yo3kso5ZKvYfe35ne24+sCRE/TxsGAePUHl6tdZhnDMJy1+0cuk1jYccYJDY+g20a1c+27VpfqKWMW1Fzi1IQvZ79Uh/+tYrI9dwwq0KGutNcAAIZhOFtbE5ZQwiH9XEv2v37U/XFqM6r4K6gKI/VMgwhFk8YYaP1ogymK/jzbkxKf53VCBcocVWsgtF5IQnnA5+gnaY//BwaAEldTNopBaQ4l69YgZRmvWxM6b08BzGxDDu6DLjmUVgx/cApyR4qNZ23XzRHsxe6I5tjJIx3nnLZFZ5inAIktpwsqkGK09AFO9stTUbGFYBQQDHziGfZ8P917ReIJtszbgqAP/QkDn/Qz5ihE98hSOY1HCU0i4tZF0o1xbawnmGVZbuIzxTRUIHF3xhgAYEdHsgz1EYS6SIKBT4EW8cLDaVOGlJVy18I3R0pjglviZqH1I58a4Y+29/YQAMB+63mTb61wpXdhUCzpl9tR5k0o96eA1vjFE32ZrGRA0RLclvgGBj6hzItQEbhUO9d+eDW50mXJlw4q437P1+x5t7ebj32BUUDQ8AgqECpDaaMpirJe3GlOseeGeKq4Kt0E6104qjklHSrI18ya72U48qV9bx3B7ry/ACusCT5a5aMuAAAAAElFTkSuQmCC'
  },
  {
    label: '退出火狐',
    accesskey: 'Q',
    oncommand: 'goQuitApplication();',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAABbElEQVQ4jZ3SQUojURSF4c8o0iDEHQXJFjJ0pIjOkyygXIWRaNUtCIVEcKwzB9mBo8wyzgZEaFI9SBnSdsqYPqMH97yf8859bFFwmXG+zbdV97ze8/pflxN+1YHWZ7Uq2QtOc2Z1oJxZcFqyV5fiIHgKyuClDhS8VJ6nhIO/IGP2Ux6C3yln67NNHaWcVd6HMfurQc5FUOZcfU1aV3bOVXXn4jPNYc4s5XnTk7/bWspzzmzMoaATlDec7Aq64SSWfXXccZ3xntDYFZTQyHi/41rwGLxtMkLGeXBZNw/egkdBEUzrjNsUTINCRjdYjGjuChnRDBYZXQNaQTmkvStoSDsoB7T0OUqZZ0ySmsI3KVkWPUmZ9zmC1RcIej8FBb34XP2XQRF8BL3vkiU0KshHUPxjuOW4gpUZkyHt9QWMaA5pZ0yqJMUtx99F7qTMK/MiluudVueymnVqAevqczSgVX2NIigyugNaq2K/6A9pGaYV9NePLwAAAABJRU5ErkJggg=='
  },
]
