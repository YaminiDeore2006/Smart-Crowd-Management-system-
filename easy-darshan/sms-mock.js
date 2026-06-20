/**
 * SMS mock: logs to console and keeps a ring buffer for the admin UI.
 * Swap `sendMockSms` body for a real provider (Twilio, etc.) when ready.
 */

const MAX_LOG = 200;
const recentLog = [];

function sendMockSms({ to, message, serial, phase }) {
  const safeTo = to || "(no phone)";
  const entry = {
    time: new Date().toISOString(),
    to: safeTo,
    message,
    serial: serial || "",
    phase: phase || "info",
  };
  console.log(`[SMS MOCK] → ${safeTo} | ${serial || "-"} | ${message}`);
  recentLog.unshift(entry);
  if (recentLog.length > MAX_LOG) recentLog.pop();
  return entry;
}

function getSmsLog(limit = 50) {
  return recentLog.slice(0, Math.min(limit, MAX_LOG));
}

module.exports = { sendMockSms, getSmsLog };
