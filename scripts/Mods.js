"#comment": "",
  "html": {
    "@lang": "en",
    "head": {
      "meta": [
        {
          "@charset": "UTF-8"
        },
        {
          "@name": "viewport",
          "@content": "width=device-width, initial-scale=1.0"
        }
      ],
      "title": "unbl0cked_hardest v1",
      "style": "body {\r\n background-color: black;\r\n font-family: Arial, sans-serif;\r\n margin: 0;\r\n padding: 0;\r\n overflow: hidden;\r\n }\r\n \r\n button {\r\n background-color: #000;\r\n color: #fff;\r\n border: none;\r\n border-radius: 5px;\r\n padding: 5px 10px;\r\n cursor: pointer;\r\n margin-top: 10px;\r\n }\r\n \r\n input {\r\n background-color: #000;\r\n color: #fff;\r\n border: none;\r\n border-radius: 5px;\r\n padding: 5px 10px;\r\n cursor: pointer;\r\n margin-top: 10px;\r\n }\r\n\r\n .wave-animation {\r\n position: fixed;\r\n width: 100%;\r\n height: 100%;\r\n top: 0;\r\n left: 0;\r\n z-index: -1;\r\n background-color: black;\r\n overflow: hidden;\r\n }\r\n\r\n .wave {\r\n position: absolute;\r\n bottom: 0;\r\n left: 0;\r\n width: 500%;\r\n height: 100%;\r\n background: repeating-linear-gradient(\r\n -45deg,\r\n transparent,\r\n transparent 10px,\r\n grey 20px,\r\n darkgrey 30px\r\n );\r\n background-size: 200% 30px;\r\n animation: wave 200s linear infinite;\r\n }\r\n\r\n @keyframes wave {\r\n 0% {\r\n transform: translateX(0);\r\n }\r\n 100% {\r\n transform: translateX(-50%);\r\n }\r\n }\r\n\r\n .top-bar {\r\n background-color: rgba(0, 0, 0, 0.9);\r\n color: #fff;\r\n position: fixed;\r\n bottom: 0;\r\n left: 0;\r\n width: 100%;\r\n display: flex;\r\n justify-content: space-between;\r\n align-items: center;\r\n padding: 10px;\r\n }\r\n\r\n .top-bar h1 {\r\n margin: 0;\r\n }\r\n\r\n .clock {\r\n font-size: 18px;\r\n font-weight: bold;\r\n }\r\n\r\n .change-list-button {\r\n background-color: #000;\r\n color: #fff;\r\n border: none;\r\n border-radius: 5px;\r\n padding: 5px 10px;\r\n cursor: pointer;\r\n }\r\n\r\n .change-list-menu {\r\n display: none;\r\n position: fixed;\r\n top: 50%;\r\n left: 50%;\r\n transform: translate(-50%, -50%);\r\n padding: 20px;\r\n background-color: #000;\r\n box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\r\n z-index: 1;\r\n color: #fff;\r\n border-radius: 10px;\r\n opacity: 0.9;\r\n }\r\n\r\n .change-list-menu h2 {\r\n font-weight: bold;\r\n color: #fff;\r\n }\r\n\r\n .change-list-menu label {\r\n display: block;\r\n margin-bottom: 10px;\r\n }\r\n\r\n .change-list-menu input {\r\n width: 100%;\r\n padding: 5px;\r\n margin-bottom: 10px;\r\n }\r\n\r\n .change-list-menu button {\r\n background-color: #000;\r\n color: #fff;\r\n border: none;\r\n border-radius: 5px;\r\n padding: 5px 10px;\r\n cursor: pointer;\r\n }\r\n\r\n .app-list {\r\n list-style-type: none;\r\n padding: 0;\r\n text-align: center;\r\n height: calc(100% - 64px);\r\n overflow: auto;\r\n }\r\n\r\n .app-entry {\r\n margin: 10px;\r\n cursor: pointer;\r\n background-color: rgba(0, 0, 0, 0.6);\r\n border-radius: 10px;\r\n padding: 10px;\r\n color: #fff;\r\n }\r\n\r\n .app-entry:hover {\r\n background-color: #333;\r\n }\r\n\r\n .app-popup {\r\n display: none;\r\n position: fixed;\r\n top: 50%;\r\n left: 50%;\r\n transform: translate(-50%, -50%);\r\n padding: 20px;\r\n background-color: #000;\r\n box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\r\n color: #fff;\r\n border-radius: 10px;\r\n opacity: 0.9;\r\n }\r\n\r\n .popup-close {\r\n position: absolute;\r\n top: 5px;\r\n right: 5px;\r\n cursor: pointer;\r\n }\r\n\r\n .bottom-bar {\r\n background-color: rgba(0, 0, 0, 0.9);\r\n }\r\n\r\n .download-button {\r\n background-color: #000;\r\n color: #fff;\r\n border: none;\r\n border-radius: 5px;\r\n padding: 5px 10px;\r\n cursor: pointer;\r\n margin-top: 10px;\r\n }"
    },
    "body": {
      "div": [
        {
          "@class": "wave-animation",
          "div": {
            "@class": "wave"
          }
        },
        {
          "@class": "app-popup",
          "@id": "appPopup",
          "span": {
            "@class": "popup-close",
            "@onclick": "closePopup()",
            "#text": "X"
          },
          "h2": {
            "@id": "popupAppName"
          },
          "p": {
            "@id": "popupAppDescription"
          },
          "button": [
            {
              "@id": "popupRunButton",
              "#text": "Run"
            },
            {
              "@id": "downloadSourceButton",
              "@class": "download-button",
              "#text": "Download Source"
            },
            {
              "@id": "downloadHtmlButton",
              "@class": "download-button",
              "#text": "Download Single-file HTML"
            }
          ]
        },
        {
          "@class": "change-list-menu",
          "@id": "changeListMenu",
          "h2": "Change List",
          "hr": "",
          "h4": [
            "Official - https://uh.jscraft2.repl.co/uh.json",
            "(Submit a pull request at https://github.com/SevenworksDev/UnblockedHardest to create a new listing here)"
          ],
          "input": {
            "@type": "text",
            "@id": "newAppsJsonUrl",
            "@placeholder": "Enter URL"
          },
          "button": {
            "@onclick": "changeAppListUrl()",
            "#text": "Change"
          }
        },
        {
          "@class": "top-bar",
          "h1": "unbl0cked_hardest (v1)",
          "div": [
            {
              "@class": "clock",
              "@id": "clock"
            },
            {
              "@class": "change-list-button",
              "@onclick": "openChangeListMenu()",
              "#text": "Change List"
            }
          ]
        }
      ],
      "ul": {
        "@class": "app-list",
        "@id": "appList"
      },
      "script": "let ctrlKeyPressCount = 0;\r\n\r\n document.addEventListener(\"keydown\", function (event) {\r\n if (event.ctrlKey) {\r\n resetToDefault();\r\n }\r\n });\r\n\r\n function openChangeListMenu() {\r\n const changeListMenu = document.getElementById(\"changeListMenu\");\r\n changeListMenu.style.display = \"block\";\r\n }\r\n\r\n function closeChangeListMenu() {\r\n const changeListMenu = document.getElementById(\"changeListMenu\");\r\n changeListMenu.style.display = \"none\";\r\n }\r\n\r\n function changeAppListUrl() {\r\n const newAppsJsonUrlInput = document.getElementById(\"newAppsJsonUrl\");\r\n const newAppsJsonUrl = newAppsJsonUrlInput.value;\r\n localStorage.setItem(\"appsJsonUrl\", newAppsJsonUrl);\r\n fetchAndLoadAppList(newAppsJsonUrl);\r\n closeChangeListMenu();\r\n }\r\n\r\n function resetToDefault() {\r\n ctrlKeyPressCount++;\r\n if (ctrlKeyPressCount === 9) {\r\n localStorage.removeItem(\"appsJsonUrl\");\r\n ctrlKeyPressCount = 0;\r\n fetchAndLoadAppList(\"https://uh.jscraft2.repl.co/uh.json\");\r\n }\r\n }\r\n\r\n function fetchAndLoadAppList(url) {\r\n fetch(url)\r\n .then((response) => response.json())\r\n .then((data) => {\r\n const appList = document.getElementById(\"appList\");\r\n appList.innerHTML = \"\";\r\n data.forEach((app) => {\r\n const listItem = document.createElement(\"li\");\r\n listItem.classList.add(\"app-entry\");\r\n listItem.innerHTML = `\r\n <img src=\"${app.icon}\" alt=\"${app.name}\" width=\"32\" height=\"32\">\r\n ${app.name}\r\n `;\r\n listItem.onclick = () => openPopup(app);\r\n appList.appendChild(listItem);\r\n });\r\n });\r\n }\r\n\r\n function openPopup(app) {\r\n const popup = document.getElementById(\"appPopup\");\r\n const popupAppName = document.getElementById(\"popupAppName\");\r\n const popupAppDescription = document.getElementById(\r\n \"popupAppDescription\"\r\n );\r\n const popupRunButton = document.getElementById(\"popupRunButton\");\r\n const downloadSourceButton = document.getElementById(\r\n \"downloadSourceButton\"\r\n );\r\n const downloadHtmlButton =\r\n document.getElementById(\"downloadHtmlButton\");\r\n\r\n popupAppName.textContent = app.name;\r\n popupAppDescription.textContent = app.description;\r\n popupRunButton.onclick = () => openAppInNewWindow(app.url);\r\n\r\n if (app.dl) {\r\n downloadSourceButton.style.display = \"block\";\r\n downloadSourceButton.onclick = () => downloadFile(app.dl, app.name+\".uh.zip\");\r\n } else {\r\n downloadSourceButton.style.display = \"none\";\r\n }\r\n\r\n if (app.html) {\r\n downloadHtmlButton.style.display = \"block\";\r\n downloadHtmlButton.onclick = () => downloadFile(app.html, app.name+\".uh.html\");\r\n } else {\r\n downloadHtmlButton.style.display = \"none\";\r\n }\r\n\r\n popup.style.display = \"block\";\r\n }\r\n\r\n function openAppInNewWindow(url) {\r\n const newWindow = window.open(\"about:blank\", \"_blank\");\r\n if (newWindow) {\r\n newWindow.document.write(\r\n '<iframe src=\"' +\r\n url +\r\n '\" frameborder=\"0\" style=\"position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;\"></iframe>'\r\n );\r\n } else {\r\n alert(\r\n \"Browser prevented popups, Change your security settings.\"\r\n );\r\n }\r\n }\r\n\r\n function closePopup() {\r\n const popup = document.getElementById(\"appPopup\");\r\n popup.style.display = \"none\";\r\n }\r\n\r\n function updateClock() {\r\n const now = new Date();\r\n const hours = now.getHours();\r\n const minutes = now.getMinutes();\r\n const ampm = hours >= 12 ? \"PM\" : \"AM\";\r\n const formattedHours = hours % 12 || 12;\r\n const timeString = `${formattedHours}:${String(minutes).padStart(\r\n 2,\r\n \"0\"\r\n )} ${ampm}`;\r\n const clock = document.getElementById(\"clock\");\r\n clock.textContent = timeString;\r\n }\r\n\r\n updateClock();\r\n setInterval(updateClock, 1000);\r\n\r\n const storedAppsJsonUrl = localStorage.getItem(\"appsJsonUrl\");\r\n const initialAppsJsonUrl = storedAppsJsonUrl || \"https://uh.jscraft2.repl.co/uh.json\";\r\n fetchAndLoadAppList(initialAppsJsonUrl);\r\n\r\n function downloadFile(url, fileName) {\r\n const link = document.createElement(\"a\");\r\n link.href = url;\r\n link.download = fileName;\r\n link.click();\r\n }"
    }
  }
}
