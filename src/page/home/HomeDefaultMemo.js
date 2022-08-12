export const HOME_DEFAULT_MEMO = [
  {
    id: "Afa124te4t4",
    title: "You can",
    date: "2022-08-05T01:00:00",
    color: "#f44336",
    memo: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit pariatur eius ipsum debitis. Asperiores quidem obcaecati ullam suscipit vitae! Illo sint tenetur eveniet rem adipisci veritatis optio mollitia. Nemo quam repellat blanditiis distinctio, dicta placeat expedita possimus eaque perferendis unde temporibus dolorum corrupti delectus voluptate, deserunt repellendus, beatae repudiandae! Nihil?,</p>`,
    major: true,
  },
  {
    id: "Afa12415t4",
    title: "make",
    date: "2022-07-25T10:55:00",
    color: "#2196f3",
    memo: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>`,
    major: false,
  },
  {
    id: "24te4t4",
    title: "your own",
    date: "2022-07-05T15:43:00",
    color: "#4caf50",
    memo: `<p>😁🤗🤗🤗🤗🤗🤗🤗🤗<br></p>`,
    major: true,
  },

  {
    id: "Afhh63jh4t4",
    title: "memo",
    date: "2022-10-05T22:20:00",
    color: "#ffeb3b",
    memo: `<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur dolor illo ratione dolore dolorem, alias corrupti blanditiis, saepe quas ex magni rem non quaerat repellat, perspiciatis provident. Dolores nostrum, exercitationem rerum, modi corporis laboriosam odit alias perspiciatis minus nihil nisi reprehenderit est. Neque alias reiciendis cupiditate magni architecto voluptate eaque ducimus eum aperiam, hic beatae corporis repellendus inventore dolor, quod molestias necessitatibus! Aliquid, similique accusantium a placeat fugit reiciendis sed alias qui rerum ipsum non aut nesciunt omnis consequatur facilis mollitia quam blanditiis numquam nulla odit repellat vero! Sed culpa fugit sapiente laudantium beatae alias. Tempora nam quas molestiae?</p>`,
    major: true,
  },
  {
    id: "Afhnt32u14t4",
    title: "please",
    date: "2022-08-15T22:20:00",
    color: "#2196f3",
    memo: `<p>😁 old~~~~~~~🤗 memo gggg<br>gggggg<br>ggggㅎㅎㅎlkfa;ljdf;as;f;<br></p>
  <p>as;oeifja;s<br>ijf;lsak<del>asefasef</del>aa ~~~ memo gg</p>`,
    major: false,
  },
  {
    id: "Afhntkljt4",
    title: "log in",
    date: "2022-05-25T22:20:00",
    color: "#4caf50",
    memo: `<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur dolor illo ration</p>`,
    major: false,
  },
  {
    id: "Afhh9ik4t4",
    title: "first~!!",
    date: "2022-04-05T22:20:00",
    color: "#ffeb3b",
    memo: `<p>Make your own account and please enjoy my Diary App ~^^</p>`,
    major: true,
  },
];

const yearMonthMaker = () => {
  const nowYear = new Date().getFullYear();
  const nowMonth = new Date().getMonth() + 1;

  return `${nowYear}-0${nowMonth}`;
};

export const HOME_DEFAULT_EVENT = [
  {
    groupId: "12afaef3",
    groupTitle: "Job",
    id: "123",
    title: "Meet my frends",
    allDay: true,
    start: yearMonthMaker() + "-05T00:00",
    end: yearMonthMaker() + "-06T24:00:00",
    color: "#4caf50",
  },

  {
    groupTitle: "family event",
    groupId: "afea4",
    id: "afea4q4t4g",
    title: "Throw party",
    allDay: false,
    start: yearMonthMaker() + "-02T14:00",
    end: yearMonthMaker() + "-02T20:00",
    color: "#2196f3",
  },

  {
    groupId: "",
    id: "133584fasefa-arnla",
    title: "",
    start: yearMonthMaker() + "-26T00:00",
    end: yearMonthMaker() + "-27T24:00",
    color: "#ff9f89",
    allDay: true,
    overlap: false,
    display: "background",
  },

  {
    id: "12",
    title: "Basketball club",
    color: "#f44336",
    groupId: "1hwhw2",
    groupTitle: "regular Work",
    allDay: true,

    // 정기 만의 부분
    daysOfWeek: ["0"],
    startRecur: yearMonthMaker() + "-01",
    endRecur: yearMonthMaker() + "-30",
  },
  {
    id: "12abbag64",
    title: "Meeting",
    groupId: "blueEvents",
    color: "#ff9f89",

    daysOfWeek: ["4"],
    startTime: "10:45:00",
    endTime: "12:45:00",
    startRecur: yearMonthMaker() + "-01",
    endRecur: yearMonthMaker() + "-25T24:00",
  },
];
