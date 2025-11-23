    function updateClock() {
      const now = new Date();

      let h = now.getHours();
      let m = String(now.getMinutes()).padStart(2,'0');
      let s = String(now.getSeconds()).padStart(2,'0');
      let period = "am";
      if (h >= 12) {
        period = "pm";
        if (h > 12) h -= 12;
      }
      if (h === 0) h = 12;
      document.getElementById("clock").textContent =
        `${h}:${m}:${s} ${period}`;

      let day = String(now.getDate()).padStart(2,'0');
      let month = String(now.getMonth()+1).padStart(2,'0'); 
      let year = now.getFullYear();
      document.getElementById("date").textContent =
        `${month}/${day}/${year}`;

      const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      document.getElementById("day").textContent = days[now.getDay()];
    }
    setInterval(updateClock, 1000);
    updateClock();