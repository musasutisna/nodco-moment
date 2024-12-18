const moment = require('moment');
const momentTimezone = require('moment-timezone');

const config =  {
  timezone: 'UTC',
  utcOffset: 0 * 60,
  localeId: 'en',
  format: {
    date: 'D MMMM YYYY',
    datetime: 'D MMMM YYYY HH:mm',
    datetimes: 'D MMMM YYYY HH:mm:ss',
    time: 'HH:mm',
    times: 'HH:mm:ss'
  }
};

/**
 * Default moment
 */
const m = moment;

/**
 * Set default timezone.
 *
 * @param   string    IANA time zone
 * @return  void
 */
function setTimezone(timezone) {
  moment.tz.setDefault(timezone || config.timezone);
}

/**
 * Identify datetime string in utc timezone then configurable timezone.
 *
 * @param   string    datetime will be identify
 * @param   number    utcoffset config
 * @return  object
 */
const utc = function (d, u) {
  return moment(d)
    .utc()
    .utcOffset(u || config.utcOffset);
};

/**
 * Formating datetime moment with config.
 *
 * @param   string    datetime in moment
 * @param   string    config datetime format or moment datetime format
 * @param   string    localization id
 * @return  string
 */
const format = function (d, f, l) {
  return d.locale(l || config.localeId).format(config.format[f] || f);
};

/**
 * Formating datetime string with config.
 *
 * @param   string    datetime will be identify
 * @param   string    config datetime format or moment datetime format
 * @param   string    localization id
 * @return  string
 */
const formatm = function (d, f, l) {
  return format(m(d), f, l);
};

/**
 * Formating datetime utc string with config.
 *
 * @param   string    datetime utc will be identify
 * @param   string    config datetime format or moment datetime format
 * @param   string    localization id
 * @param   number    utcoffset config
 * @return  string
 */
const formatutc = function (d, f, l, u) {
  return format(utc(d, u), f, l);
};

module.exports = {
  config,
  m,
  setTimezone,
  utc,
  format,
  formatm,
  formatutc
};
