export declare type ListItemType = {
  imageSrc: string,
  title: string,
  desc: string,
  date: Date
  bcColor: string
  color: string
}

export const sampleList: ListItemType[] = [
  {
    imageSrc: "https://picsum.photos/id/1/300/150",
    title: "Sample Title 1",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: new Date("2011-10-10"),
    bcColor: "#D75B66",
    color: "#fff",
  },
  {
    imageSrc: "https://picsum.photos/id/2/300/150",
    title: "Sample Title 2",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: new Date("2015-10-10"),
    bcColor: "#23345C",
    color: "#fff",
  },
  {
    imageSrc: "https://picsum.photos/id/3/300/150",
    title: "Sample Title 3",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: new Date("2013-10-10"),
    bcColor: "#F1BA48",
    color: "#fff",
  },
  {
    imageSrc: "https://picsum.photos/id/4/300/150",
    title: "Sample Title 4",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: new Date("2020-10-10"),
    bcColor: "#BD8A44",
    color: "#fff",
  },
  {
    imageSrc: "https://picsum.photos/id/5/300/150",
    title: "Sample Title 5",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: new Date("2013-10-10"),
    bcColor: "#DFAFA0",
    color: "#000",
  },
]

export const backgroundColorList: string[] = [
  "rgba(215, 91, 102, 0.4)", // #D75B66
  "rgba(35, 52, 92, 0.4)", // #23345C
  "rgba(241, 186, 72, 0.4)", // #F1BA48
  "rgba(189, 138, 68, 0.4)", // #BD8A44
  "rgba(223, 175, 160, 0.4)", // #DFAFA0
]
