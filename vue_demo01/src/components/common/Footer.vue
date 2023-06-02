<template>
  <div class="footer">
    <div class="footer-main">
      <div class="footer-logo">
        <img src="@/assets/images/logo.png">
      </div>
      <div class="footer-fc">
        <img src="@/assets/images/title/foot-factory.png">
      </div>
      <div class="copyright">
        <ul class="copy-ul">
          <li>关于我们</li>
          <li>|</li>
          <li>联系我们</li>
          <li>|</li>
          <li>版权声明</li>
          <li>|</li>
          <li>意见反馈</li>
        </ul>
        <div class="copy-bottom">
          <div>
            Copyright © 2018~2038 小鹿线 www.xuexiluxian.cn 24小时服务热线：010-86483040
          </div>
          <p>
            《小鹿线用户服务协议》 《小鹿线隐私政策》 京ICP备18061704号
          </p>
        </div>
      </div>
      <div class="wx">
        <div class="wx-bg"><img src="@/assets/images/wx.png"></div>
        <div class="wx-dsc">官网微信</div>
      </div>
      <div class="wx">
        <div class="wx-bg"><img src="@/assets/images/wx.png"></div>
        <div class="wx-dsc">小姐姐微信</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .footer{
    width: 100%;
    min-width: 1140px;
    height: 150px;
    background: #3483FF;
    .footer-main{
      display: flex;
      height: 100%;
      justify-content: space-between;
      color: #FFFFFF;
      margin: 0 200px;
      align-items: center;
      .footer-logo{
        width: 110px;
        opacity: 1;
        img{
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
      }
      .footer-fc{
        width: 130px;
        margin: 0 20px;
        img{
          width: 100%;
          height: 100%;
          vertical-align: middle;
          border-style: none;
        }
      }
      .copyright{
        .copy-ul{
          display: flex;
          font-size: 14px;
          margin: 0 0 10px 0;
          li{
            margin: 0 12px;
          }
        }
        .copy-bottom{
          font-size: 12px;
          div{
            text-align: center;
            margin-top: 14px;
          }
          p{
            text-align: center;
            margin-top: 12px;
          }
        }
      }
      .wx{
        margin-left: 20px;
        width: 80px;
        height: 100px;
        font-size: 12px;
        .wx-bg{
          width: 80px;
          height:80px;
          img{
            width: 100%;
            height: 100%;
            vertical-align: middle;
            border-style: none;
          }
        }
        .wx-dsc{
          text-align: center;
          line-height: 20px;
        }

      }
    }
  }
</style>