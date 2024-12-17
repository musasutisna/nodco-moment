const moment = require('moment');
const momentTimezone = require('moment-timezone');

// set default timezone
moment.tz.setDefault('UTC');

const config =  {
  utcOffset: 0 * 60,
  format: {
    date: 'D MMMM YYYY',
    datetime: 'D MMMM YYYY HH:mm',
    datetimes: 'D MMMM YYYY HH:mm:ss',
    time: 'HH:mm',
    times: 'HH:mm:ss'
  }
};

const m = moment;

const utc = function (d, utcOffset) {
  return moment(d)
    .utc()
    .utcOffset(utcOffset || config.utcOffset)
};

const format = function (d, f) {
  return d.format(config.format[f] || f)
};

const formatm = function (d, f) {
  return format(m(d), f)
};

const formatutc = function (d, f, utcOffset) {
  return format(utc(d, utcOffset), f)
};

module.exports = {
  config,
  m,
  utc,
  format,
  formatm,
  formatutc
};
