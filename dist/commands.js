/******/ (function() { // webpackBootstrap
/******/ 	"use strict";

;// ./src/util/log.ts
function pad(num) {
  return num.toString().padStart(2, '0');
}
function padMilliseconds(ms) {
  return ms.toString().padStart(3, '0');
}
function log_formatLog(message) {
  var now = new Date();
  var formattedTime = "".concat(pad(now.getHours()), ":").concat(pad(now.getMinutes()), ":").concat(pad(now.getSeconds()), ":").concat(padMilliseconds(now.getMilliseconds()));
  return "[VdSpek ".concat(formattedTime, "] ").concat(message);
}
;// ./src/util/mailitem.ts

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
  console.log(formatLog('Machine type:'), typeString);
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
;// ./src/commands/commands.ts


/* global Office */
Office.onReady(function () {
  // Office.js is ready to be called.
  console.log(log_formatLog("Office.js is ready to be called"));
});
/**
 * Shows a notification when the add-in command is executed.
 */
function action(event) {
  var _a;
  console.log(log_formatLog("Action to show notification when the add-in command is executed"));
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
  console.log(log_formatLog("Read subject..."));
  try {
    var item = Office.context.mailbox.item;
    console.log(log_formatLog("item"), item);
    if (item && item.subject) {
      var subject = item.subject;
      console.log(log_formatLog("Subject"), subject);
      if (isQuotationRequest(subject)) {
        console.log(log_formatLog("isQuotationRequest = true"));
      }
      Office.context.ui.displayDialogAsync("https://webit01.github.io/vdspek/dist/dialog.html?subject=".concat(encodeURIComponent(subject)), {
        height: 30,
        width: 40
      }, function (result) {
        if (result.status === Office.AsyncResultStatus.Failed) {
          console.error(log_formatLog("Dialoog openen mislukt:"), result.error.message);
        }
      });
    } else {
      console.warn(log_formatLog("Geen onderwerp beschikbaar."));
    }
    event.completed();
  } catch (e) {
    console.error(log_formatLog("Error when read subject"), e);
  }
}
var pdfAttachmentUrl = "https://www.gebruikteheftrucks.nl/site/algemene-voorwaarden/$FILE/Algemene%20voorwaarden%20Van%20der%20Spek%20Nederlands%202025.pdf";
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
        console.log(log_formatLog("Bijlage toegevoegd!"));
      } else {
        console.error(log_formatLog("Fout bij toevoegen"), result.error);
      }
    });
  }, 2000); // kleine delay zodat compose venster klaar is
  // Altijd afsluiten
  event.completed();
}
function createHtmlMailWithAttachment(event) {
  console.log(log_formatLog("Create HTML mail with attachment"));
  // HTML body instellen
  Office.context.mailbox.item.body.setAsync("<h1 style='color:blue'>Aanbieding</h1><p>Beste klant,<br/>Hierbij onze aanbieding.</p>", {
    coercionType: Office.CoercionType.Html
  }, function (asyncResult) {
    if (asyncResult.status === Office.AsyncResultStatus.Succeeded) {
      console.log(log_formatLog("HTML body ingesteld"));
    } else {
      console.error(log_formatLog("Fout bij body"), asyncResult.error);
    }
  });
  console.log(log_formatLog("Add attachment"));
  // Bijlage toevoegen (via URL of base64)
  Office.context.mailbox.item.addFileAttachmentAsync(pdfAttachmentUrl,
  // Publieke URL of base64
  "AlgemeneVoorwaarden.pdf", function (result) {
    if (result.status === Office.AsyncResultStatus.Succeeded) {
      console.log(log_formatLog("Bijlage toegevoegd"));
    } else {
      console.error(log_formatLog("Fout bij bijlage"), result.error);
    }
  });
  // Altijd afsluiten
  event.completed();
}
// Register the functions with Office
Office.actions.associate("action", action);
Office.actions.associate("readSubject", readSubject);
Office.actions.associate("openNewMailWithAttachment", openNewMailWithAttachment);
Office.actions.associate("createHtmlMailWithAttachment", createHtmlMailWithAttachment);
/******/ })()
;
//# sourceMappingURL=commands.js.map