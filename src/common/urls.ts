const LIVE = false;

const SITEURL = 'https://example.com/';
const LIVEURL = LIVE ? SITEURL : 'http://localhost:5000/';
const ROOTURL = `${LIVEURL}api/v1/`;
const FILEURL = LIVEURL;
const SETTINGS_ID = '68ad8844bfdf0cec7f623bc2';




const API = {
  // FAQ endpoints
  addfaq: `${ROOTURL}faqs/addfaq`,
  listfaq: `${ROOTURL}faqs/listfaq`,
  getFaq: `${ROOTURL}faqs/getFaq/`,
  updatefaq: `${ROOTURL}faqs/updatefaq/`,
  deletefaq: `${ROOTURL}faqs/deletefaq/`,
  toggleStatusfaq: `${ROOTURL}faqs/togglestatus/`,
  checkDuplicateFaq: `${ROOTURL}faqs/check-duplicate`,
};

const ImportedURL = { API, LIVEURL, FILEURL, SETTINGS_ID };
export default ImportedURL;