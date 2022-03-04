import getRandom from '../../util/getRandom.js';
import namer from '../name/normal.js';

const commonMails = ["gmail.com", "yahoo.com", "mail.com", "email.com", "hotmail.com", "aol.com"]

const endsWith = ["com", "net", "co", "to", "tk", "ml", "ga", "gg", "cc", "de", "in", "jp", "cr", "me", "life", "moe", "us", "uk"]

const secondLevel = ["co", "org", "edu"]

export default (common=false) => {
  return `${namer(3 + Math.floor(Math.random() * 5)).toLowerCase()}${
    Math.random() < 0.5 ? "." : Math.random() < 0.5 ? "von" : ""
  }${namer(3 + Math.floor(Math.random() * 5)).toLowerCase()}@${common ? getRandom(commonMails) : `${namer(4 + Math.floor(Math.random() * 3)).toLowerCase()}.${Math.random() < 0.5 ? getRandom(secondLevel) : ""}${getRandom(endsWith)}`}`;
};
