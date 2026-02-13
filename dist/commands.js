/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/util/log.ts":
/*!*************************!*\
  !*** ./src/util/log.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLog: function() { return /* binding */ formatLog; }
/* harmony export */ });
function pad(num) {
  return num.toString().padStart(2, '0');
}
function padMilliseconds(ms) {
  return ms.toString().padStart(3, '0');
}
function formatLog(message) {
  var now = new Date();
  var formattedTime = "".concat(pad(now.getHours()), ":").concat(pad(now.getMinutes()), ":").concat(pad(now.getSeconds()), ":").concat(padMilliseconds(now.getMilliseconds()));
  return "[VdSpek ".concat(formattedTime, "] ").concat(message);
}

/***/ }),

/***/ "./src/util/mailitem.ts":
/*!******************************!*\
  !*** ./src/util/mailitem.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMachineNumberFromSubject: function() { return /* binding */ getMachineNumberFromSubject; },
/* harmony export */   getMachineTypeFromSubject: function() { return /* binding */ getMachineTypeFromSubject; },
/* harmony export */   getReferenceFromSubject: function() { return /* binding */ getReferenceFromSubject; },
/* harmony export */   isQuotationRequest: function() { return /* binding */ isQuotationRequest; }
/* harmony export */ });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./src/util/log.ts");

var MachineType;
(function (MachineType) {
  MachineType["ForkLiftTruck"] = "ForkLiftTruck";
  MachineType["PalletLifter"] = "PalletLifter";
  MachineType["Stacker"] = "Stacker";
  MachineType["TractionBattery"] = "TractionBattery";
  MachineType["MobileElevatedWorkPlatform"] = "MobileElevatedWorkPlatform";
  MachineType["ReachTruck"] = "ReachTruck";
  MachineType["TowingTractor"] = "TowingTractor";
  MachineType["Sweeper"] = "Sweeper";
  MachineType["Scrubber"] = "Scrubber";
  MachineType["Unknown"] = "Unknown";
})(MachineType || (MachineType = {}));
function isQuotationRequest(subject) {
  if (!subject) {
    return false;
  }
  if ((subject.includes("Prijsopgave") || subject.includes("Quotation") || subject.includes("Preisauskunft")) && subject.includes("[") && subject.includes("]")) {
    return true;
  }
  return false;
}
function getReferenceFromSubject(subject) {
  /*
    Voorbeeld subject:
       Prijsopgave - [2603] Hyster H 4.00 XLS-6 - Van der Spek Heftrucks B.V. (ref. 2016.00000283)
       2019-09-20 aanpassing in subject door VIP
    Prijsopgave - [Heftruck; 3216] Toyota 02-8 FDF 25 - Van der Spek Heftrucks B.V. (ref nr 2019.00002871)
  */
  // Met regex het laatste nummer uitlezen/matchen
  var regex = /([0-9.]*[0-9]*?)\)/;
  var match = subject.match(regex);
  if (!match || match.length < 2) {
    throw new Error("Kan referentienummer niet achterhalen.");
  }
  var reference = match[1];
  // Verwijder het laatste haakje (voor de zekerheid)
  return reference.replace(/\)+$/, '');
}
function getMachineNumberFromSubject(subject) {
  var regex = /\[.*?(\d+)\]/;
  var match = subject.match(regex);
  if (!match || match.length < 2) {
    throw new Error("Geen machinenummer gevonden in het onderwerp van de mail.");
  }
  return match[1];
}
function getMachineTypeFromSubject(subject) {
  // Eerst het type als string uitlezen
  var regex = /\[([^;\]]+);/;
  var match = subject.match(regex);
  if (!match) {
    throw new Error("Kan type machine niet bepalen.");
  }
  var typeString = match[1];
  console.log((0,_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)('Machine type:'), typeString);
  //Machine type: [Heftruck; 4605]
  var lowerTypeString = typeString.toLowerCase();
  switch (lowerTypeString) {
    // Nederlands
    case "heftruck":
    case "vorkheftruck":
    case "ruwterrein":
      return MachineType.ForkLiftTruck;
    case "palletheffer":
      return MachineType.PalletLifter;
    case "stapelaar":
      return MachineType.Stacker;
    case "tractiebatterij":
      return MachineType.TractionBattery;
    case "hoogwerker":
      return MachineType.MobileElevatedWorkPlatform;
    case "reachtruck":
      return MachineType.ReachTruck;
    case "elektrotrekker":
      return MachineType.TowingTractor;
    case "veegmachine":
      return MachineType.Sweeper;
    case "schrobmachine":
      return MachineType.Scrubber;
    // Engels
    case "forklift truck":
      return MachineType.ForkLiftTruck;
    case "mewp":
      return MachineType.MobileElevatedWorkPlatform;
    case "reach truck":
      return MachineType.ReachTruck;
    case "stacker / pallet lifter":
      return MachineType.Stacker;
    case "towing tractor":
      return MachineType.TowingTractor;
    case "sweeper":
      return MachineType.Sweeper;
    // Duits
    case "gabelstapler":
      return MachineType.ForkLiftTruck;
    case "hebebühnen":
      return MachineType.MobileElevatedWorkPlatform;
    case "schubmaststapler":
      return MachineType.ReachTruck;
    case "stapler/palettenheber":
      return MachineType.Stacker;
    case "schlepper":
      return MachineType.TowingTractor;
    case "kehrmaschine":
      return MachineType.Sweeper;
    default:
      return MachineType.Unknown;
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!**********************************!*\
  !*** ./src/commands/commands.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/log */ "./src/util/log.ts");
/* harmony import */ var _util_mailitem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mailitem */ "./src/util/mailitem.ts");


/* global Office */
Office.onReady(function () {
  console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)("Office.js is ready to be called"));
});
/**
 * Shows a notification when the add-in command is executed.
 */
function action(event) {
  var _a;
  console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)("Action to show notification when the add-in command is executed"));
  var message = {
    type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
    message: "Performed action.",
    icon: "Icon.80x80",
    persistent: true
  };
  (_a = Office.context.mailbox.item) === null || _a === void 0 ? void 0 : _a.notificationMessages.replaceAsync("ActionPerformanceNotification", message);
  event.completed();
}
/**
 * Opens a dialog showing the subject of the selected email.
 */
function readSubject(event) {
  console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)("Read subject..."));
  try {
    var item = Office.context.mailbox.item;
    console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)("item"), item);
    if (item && item.subject) {
      var subject = item.subject;
      console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)("Subject"), subject);
      if ((0,_util_mailitem__WEBPACK_IMPORTED_MODULE_1__.isQuotationRequest)(subject)) {
        console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)("isQuotationRequest = true"));
      }
      Office.context.ui.displayDialogAsync("https://webit01.github.io/vdspek/dist/dialog.html?subject=".concat(encodeURIComponent(subject)), {
        height: 30,
        width: 40
      }, function (result) {
        if (result.status === Office.AsyncResultStatus.Failed) {
          console.error((0,_util_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)("Dialoog openen mislukt:"), result.error.message);
        }
      });
    } else {
      console.warn((0,_util_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)("Geen onderwerp beschikbaar."));
    }
    event.completed();
  } catch (e) {
    console.error((0,_util_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)("Error when read subject"), e);
  }
}
var pdfAttachmentUrl = "https://www.gebruikteheftrucks.nl/site/algemene-voorwaarden/$FILE/Algemene%20voorwaarden%20Van%20der%20Spek%20Nederlands%202025.pdf";
var tempAttachmentUrl = "https://di9rnz7q5uhca.cloudfront.net/600w/cd3cc03b-fc00-4281-95f7-07c198f83e3b.jpg";
function openNewMailWithAttachment(event) {
  // Stap 1: nieuw compose venster openen
  Office.context.mailbox.displayNewMessageForm({
    toRecipients: ["henk@rademakerwebit.nl"],
    subject: "Automatisch bericht met bijlage",
    body: "Beste collega,\n\nHierbij het document.\n\nGroet,"
  });
  // Stap 2: wacht even tot compose venster actief is
  // Daarna bijlage toevoegen
  setTimeout(function () {
    Office.context.mailbox.item.addFileAttachmentAsync(pdfAttachmentUrl,
    // URL naar bestand
    "AlgemeneVoorwaarden.pdf", function (result) {
      if (result.status === Office.AsyncResultStatus.Succeeded) {
        console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)("Bijlage toegevoegd!"));
      } else {
        console.error((0,_util_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)("Fout bij toevoegen"), result.error);
      }
    });
  }, 2000); // kleine delay zodat compose venster klaar is
  // Altijd afsluiten
  event.completed();
}
function createHtmlMailWithAttachment(event) {
  console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)("Create HTML mail with attachment"));
  // HTML body instellen
  Office.context.mailbox.item.body.setAsync("<h1 style='color:blue'>Aanbieding</h1><p>Beste klant,<br/>Hierbij onze aanbieding.</p>", {
    coercionType: Office.CoercionType.Html
  }, function (asyncResult) {
    if (asyncResult.status === Office.AsyncResultStatus.Succeeded) {
      console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)("HTML body ingesteld"));
    } else {
      console.error((0,_util_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)("Fout bij body"), asyncResult.error);
    }
  });
  console.log((0,_util_log__WEBPACK_IMPORTED_MODULE_0__.formatLog)("Add attachment in base64"), tempAttachmentUrl);
  var smallImageBase64 = "data:image/png;base64," + "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+X2ioAAAAASUVORK5CYII=";
  Office.context.mailbox.item.addFileAttachmentAsync(smallImageBase64, "klein-plaatje.png", function (asyncResult) {
    console.log(asyncResult);
  });
  // Bijlage toevoegen (via URL of base64)
  // Office.context.mailbox.item.addFileAttachmentAsync(
  //     tempAttachmentUrl, // Publieke URL of base64
  //     "foto.jpg",
  //     function (result) {
  //         if (result.status === Office.AsyncResultStatus.Succeeded) {
  //             console.log(formatLog("Bijlage toegevoegd"));
  //         } 
  //         else {
  //             console.error(formatLog("Fout bij bijlage"), result.error);
  //         }
  //     }
  // );
  // Altijd afsluiten
  event.completed();
}
function addBase64Attachment(base64, filename) {
  var byteCharacters = atob(base64);
  var byteNumbers = new Array(byteCharacters.length);
  for (var i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  var byteArray = new Uint8Array(byteNumbers);
  var blob = new Blob([byteArray], {
    type: "application/pdf"
  });
  var url = URL.createObjectURL(blob);
  Office.context.mailbox.item.addFileAttachmentAsync(url, filename, {
    isInline: false
  }, function (result) {
    URL.revokeObjectURL(url);
    console.log(result);
  });
}
// Register the functions with Office
Office.actions.associate("action", action);
Office.actions.associate("readSubject", readSubject);
Office.actions.associate("openNewMailWithAttachment", openNewMailWithAttachment);
Office.actions.associate("createHtmlMailWithAttachment", createHtmlMailWithAttachment);
}();
/******/ })()
;
//# sourceMappingURL=commands.js.map