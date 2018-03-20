function drawChart(data) {
  console.log(data)
  var __eon_pubnub1 = new PubNub({
    subscribeKey: "sub-c-48d89856-246e-11e8-bb29-5a43d096f02f"
  });
  var __eon_cols1 = [data];
  var __eon_labels1 = {};
  chart1 = eon.chart({
    pubnub: __eon_pubnub1,
    channels: [data],
    history: false,
    flow: true,
    rate: 1000,
    limit: 10,
    generate: {
      bindto: "#" + data + "_chart",
      data: {
        colors: {
          data: "#D70060"
        },
        type: "line"
      },
      transition: {
        duration: 250
      },
      axis: {
        x: {
          label: ""
        },
        y: {
          label: ""
        }
      },
      grid: {
        x: {
          show: false
        },
        y: {
          show: false
        }
      },
      tooltip: {
        show: true
      },
      point: {
        show: true
      }
    },
    transform: function(message) {
      var message = eon.c.flatten(message.eon);
      var o = {};
      for (index in message) {
        if (__eon_cols1.indexOf(index) > -1) {
          o[__eon_labels1[index] || index] = message[index];
        }
      }
      return {
        eon: o
      };
    }
  });
}