let currentTheme = "";

const themes = {
  day: {
    images: {},
    colors: {
      toolbar: "rgb(184, 201, 204)",
      toolbar_text: "rgb(0, 0, 0)",
      frame: "rgb(219, 228, 230)",
      tab_background_text: "rgb(0, 0, 0)",
      toolbar_field: "rgb(219, 228, 230)",
      toolbar_field_text: "rgb(0, 0, 0)",
      tab_line: "rgb(184, 201, 204)",
      popup: "rgb(219, 228, 230)",
      popup_text: "rgb(0, 0, 0)",
      ntp_background: "rgb(219, 228, 230)",
      ntp_text: "rgb(0, 0, 0)",
      tab_loading: "rgb(184, 201, 204)",
    },
  },
  night: {
    images: {},
    colors: {
      toolbar: "rgb(52, 61, 63)",
      toolbar_text: "rgb(255, 255, 255)",
      frame: "rgb(24, 33, 35)",
      tab_background_text: "rgb(255, 255, 255)",
      toolbar_field: "rgb(24, 33, 35)",
      toolbar_field_text: "rgb(255, 255, 255)",
      tab_line: "rgb(52, 61, 63)",
      popup: "rgb(52, 61, 63)",
      popup_text: "rgb(255, 255, 255)",
      tab_loading: "rgb(52, 61, 63)",
    },
  },
};

function setTheme(theme) {
  if (currentTheme === theme) {
    // No point in changing the theme if it has already been set.
    return;
  }
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}

function checkTime() {
  let date = new Date();
  let hours = date.getHours();
  // Will set the sun theme between 8am and 8pm.
  if (hours > 8 && hours < 20) {
    setTheme("day");
  } else {
    setTheme("night");
  }
}

// On start up, check the time to see what theme to show.
checkTime();

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create("checkTime", { periodInMinutes: 5 });
