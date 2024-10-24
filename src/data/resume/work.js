/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Surveyvine',
    position: 'FOunder',
    url: 'http://surveyvine.com',
    startDate: '2024-09-28',
    endDate: '',
    summary: 'Surveyvine.com is a rewards and loyalties platform, this platform allows users to earn rewards, by completing various tasks like taking surveys, watching videos, and transcribing recordings. surveyvine.com operates on a "get-paid-to" (GPT) model, where users can accumulate points (SB) and redeem them for rewards.',
    highlights: [
      'Created using PHP codeigniter.',
      'Daily activities and daily bonuses to help users earn extra points.',
      "Withdraw points to local currencies and/or paypal.'",
    ],
  },
  {
    name: 'Thejiro Limited',
    position: 'Software Engineer',
    url: '',
    startDate: '2022-11',
    endDate: '2023-07',
    summary: 'Thejiro over web managed services for clients. building web applications and offering other services to clients.',
    highlights: [
      'Collaborated with cross-functional teams to design and implement user interfaces that enhance user experience and drive engagement.',
      'Developed and maintained blockchain-based applications utilizing Ethereum and Web3 technologies.',
      'Conducted code reviews to ensure code quality, maintainability, and adherence to best practices.',
    ],
  },
  {
    name: 'Gadgets101 NG',
    position: 'Software/Web Developer',
    url: '',
    startDate: '2018-02',
    endDate: '2022-08',
    summary: 'Worked as the lead web developer for a gadgets store. managed and maintainged their online web platform.',
    highlights: [
      'Developed and maintained an online ecommerce store.',
    ],
  },
];

export default work;
