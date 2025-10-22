looker.plugins.visualizations.add({
  id: "kpi_card",
  label: "KPI Bonito",
  options: {
    fontSize: {
      type: "string",
      label: "Font Size",
      default: "36px"
    },
    backgroundColor: {
      type: "string",
      label: "Background Color",
      default: "#f4f4f4"
    },
    textColor: {
      type: "string",
      label: "Text Color",
      default: "#333"
    }
  },
  create: function (element, config) {
    element.innerHTML = `<div id="kpi-container"></div>`;
  },
  updateAsync: function (data, element, config, queryResponse, details, done) {
    const value = data[0][queryResponse.fields.measures[0].name].rendered;
    element.innerHTML = `
      <div style="
        border-radius: 10px;
        padding: 20px;
        background: ${config.backgroundColor};
        font-size: ${config.fontSize};
        color: ${config.textColor};
        text-align: center;
        box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
      ">
        ${value}
      </div>
    `;
    done();
  }
});
