<template>
  <div class="container">
    <div class="head-box">
      <div></div>
      <div class="head-box-subject">研报一哥</div>
      <div>
        <p>海量研报，专注一哥</p>
      </div>
    </div>
    <div class="inc-box">
      <div class="inc-box-title">简介</div>
      <div class="inc-box-summary">
        通过大数据追踪分析师和研究机构的历史表现，甄别筛选准
        确率和影响力高的分析师研报，为您精选市场热点和投资机
        会，并通过人工智能算法提取
      </div>
    </div>
    <div class="report-box">
      <div>
        <div class="report-box-top">
          <div class="report-box-top-left">
            <div class="circle"></div>
          </div>
          <div class="report-box-top-right">
            今日 9：00
          </div>
        </div>
        <div class="report-box-bottom">
          <div class="report-box-bottom-left">
            <div class="vline"></div>
          </div>
          <div class="report-box-bottom-right">
            <div class="report-content-box">
              <div class="report-content">
                <span>
                  <i class="content-time">9:00</i>
                  <span class="content-title">分众传媒获阿里投资，上升空间不可想象，短期股价有望持续爆发</span>
                </span>
              </div>
            </div>
            <div class="report-thumb-box">
              <div class="report-thumb">
                <img src="../assets/87F71706-E978-47A1-90E5-946CD29A24BF@0.5x.png" height="84"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="report-box-top">
          <div class="report-box-top-left">
            <div class="circle"></div>
          </div>
          <div class="report-box-top-right">
            2018-07-19
          </div>
        </div>
        <div class="report-box-bottom">
          <div class="report-box-bottom-left">
            <div class="vline"></div>
          </div>
          <div class="report-box-bottom-right bottom-border">
            <div class="report-content-box">
              <div class="report-content">
                <span>
                  <i class="content-time">9:00</i>
                  <span class="content-title">分众传媒获阿里投资，上升空间不可想象，短期股价有望持续爆发</span>
                </span>
              </div>
            </div>
            <div class="report-thumb-box">
              <div class="report-thumb">
                <img src="../assets/87F71706-E978-47A1-90E5-946CD29A24BF@0.5x.png" height="84"/>
              </div>
            </div>
          </div>
        </div>
        <div class="report-box-bottom">
          <div class="report-box-bottom-left">
            <div class="vline"></div>
          </div>
          <div class="report-box-bottom-right bottom-border">
            <div class="report-content-box">
              <div class="report-content">
                <span>
                  <i class="content-time">9:00</i>
                  <span class="content-title">分众传媒获阿里投资，上升空间不可想象，短期股价有望持续爆发</span>
                </span>
              </div>
            </div>
            <div class="report-thumb-box">
              <div class="report-thumb">
                <img src="../assets/87F71706-E978-47A1-90E5-946CD29A24BF@0.5x.png" height="84"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="report-more">
        查看更多
      </div>
    </div>
    <div class="buy-box">
      <div class="buy-box-adv">
        每天一瓶饮料钱，获取股市早晚营养大餐，让你紧跟主流机构步伐！
      </div>
      <div class="buy-box-container">
        <div class="buy-price">
          <p><span class="price-money">¥ 99.00/月</span><span class="price-goods">早报+晚报</span></p>
        </div>
        <div class="buy-btn">
          立即订阅
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home-report"
  }
</script>

<style scoped lang="less">
  .head-box {
    height: 212px;
    background: url(../assets/lADPBbCc1glPS07NDOvNE2E_4961_3307.jpg_620x10000q90g@1x.png) no-repeat center center;
    display: flex;
    flex-flow: column;

    div {
      flex: 1;
      box-sizing: border-box;

      p {
        color: #ffffff;
        border: 1px solid #ffffff;
        width: 176px;
        height: 28px;
        line-height: 28px;
        margin: 0 auto;
      }
    }

    .head-box-subject {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: PingFangSC-Semibold;
      font-size: 2rem;
      color: #ffffff;
      letter-spacing: -0.69px;
      text-align: left;
    }
  }

  .inc-box {
    height: 100px;
    padding: 15px;
    background: #ffffff;
    display: flex;
    flex-flow: column;

    .inc-box-title {
      display: flex;
      height: 120px;
      align-items: center;
      justify-content: flex-start;
      font-family: PingFangSC-Semibold;
      color: #333333;
      letter-spacing: -0.69px;
    }

    .inc-box-summary {
      flex: 1;
      font-family: PingFangSC-Regular;
      font-size: 0.9rem;
      color: #777777;
      letter-spacing: -0.19px;
      text-align: justify;
      line-height: 1.3rem;
    }
  }

  .report-box {
    background: #ffffff;
    margin-top: 10px;
    padding: 15px;
    padding-bottom: 0;
    display: flex;
    flex-flow: column;

    div {
      box-sizing: border-box;
      display: flex;
      flex-flow: column;

      .report-box-top {
        height: 16px;
        line-height: 16px;
        display: flex;
        flex-flow: row;

        .report-box-top-left {
          height: 16px;
          width: 8px;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: flex-end;

          .circle {
            background: #ffffff;
            border: 1px solid #e63838;
            width: 7px;
            height: 7px;
            border-radius: 100%;
            box-sizing: border-box;
          }
        }
        .report-box-top-right {
          height: 16px;
          padding-left: 0.4rem;
          flex: 1;
          font-family: PingFangSC-Medium;
          font-size: 0.8rem;
          color: #e63838;
          letter-spacing: -0.27px;
          align-items: flex-start;
        }
      }

      .bottom-border {
        border-bottom: solid 1px #efefef;
      }

      .report-box-bottom {
        flex: 1;
        height: 110px;
        display: flex;
        flex-flow: row;
        box-sizing: border-box;

        .report-box-bottom-left {
          width: 8px;
          display: flex;
          align-items: center;
          .vline {
            width: 1px;
            height: 100%;
            background: #efefef;
          }
        }
        .report-box-bottom-right {
          flex: 1;
          justify-content: center;
          display: flex;
          flex-flow: row;

          .report-content-box {
            flex: 1;
            display: flex;
            flex-flow: column;
            justify-content: center;

            .report-content {
              height: 84px;
              background: #ffffff;
              text-align: left;
              padding-left: 8px;
              padding-right: 8px;

              .content-time {
                color: #999999;
                opacity: 0.9;
                font-size: .8rem;
                background: url(../assets/sun.png) no-repeat left center;
                background-size: 20px 20px;
                padding-left: 25px;
                line-height: 20px;
                display: inline-block;
              }
              .content-title {
                font-family: PingFangSC-Medium;
                font-size: 15px;
                color: #333333;
                letter-spacing: -0.34px;
                margin-left: 10px;
                line-height: 21px;
              }
            }
          }
          .report-thumb-box {
            width: 110px;
            display: flex;
            flex-flow: column;
            justify-content: center;

            .report-thumb {
              width: 110px;
              height: 84px;
            }
          }
        }
      }
    }

    .report-more {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #999999;
      letter-spacing: -0.27px;
      line-height: 12px;
      text-align: center;
      height: 40px;
      line-height: 40px;
    }
  }

  .buy-box{
    height: 94px;
    margin-top: 10px;
    background: #ffffff;
    border-top: 1px solid #f8f8f8;
    box-shadow:0 1px 8px 0 rgba(51,136,255,0.15);
    border-radius:8px 8px 0 0;
    display: flex;
    flex-flow: column;

    .buy-box-adv{
      font-family:PingFangSC-Regular;
      font-size:12px;
      color:#3388ff;
      letter-spacing:-0.34px;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .buy-box-container{
      flex: 1;
      border-top: 1px solid #f8f8f8;
      display: flex;
      flex-flow: row;

      .buy-price{
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: 16px;

        .price-money{
          font-family:PingFangSC-Regular;
          font-size:16px;
          color:#3388ff;
          letter-spacing:-0.37px;
        }
        .price-goods{
          font-family:PingFangSC-Regular;
          font-size:13px;
          color:#666666;
          letter-spacing:-0.3px;
          padding-left: 13px;
        }
      }
      .buy-btn{
        width: 128px;
        background:#3388ff;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
