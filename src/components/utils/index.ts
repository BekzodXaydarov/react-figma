export interface DestinationDataI {
  img: string;
  title: string;
  hours: string;
}

export const DestinationData: DestinationDataI[] = [
  {
    img: "/public/images/destination1.png",
    title: "Malaysia",
    hours: "16 Tours",
  },
  {
    img: "/public/images/destination2.png",
    title: "Dubai",
    hours: "16 Tours",
  },
  {
    img: "/public/images/destination3.png",
    title: "Greece",
    hours: "16 Tours",
  },
  {
    img: "/public/images/destination4.png",
    title: "Singapore",
    hours: "16 Tours",
  },
  {
    img: "/public/images/destination1.png",
    title: "Malaysia",
    hours: "16 Tours",
  },
  {
    img: "/public/images/destination2.png",
    title: "Dubai",
    hours: "16 Tours",
  },
  {
    img: "/public/images/destination3.png",
    title: "Greece",
    hours: "16 Tours",
  },
  {
    img: "/public/images/destination4.png",
    title: "Singapore",
    hours: "16 Tours",
  },
  {
    img: "/public/images/destination1.png",
    title: "Malaysia",
    hours: "16 Tours",
  },
  {
    img: "/public/images/destination2.png",
    title: "Dubai",
    hours: "16 Tours",
  },
  {
    img: "/public/images/destination3.png",
    title: "Greece",
    hours: "16 Tours",
  },
  {
    img: "/public/images/destination4.png",
    title: "Singapore",
    hours: "16 Tours",
  },
];


export interface ActivityI {
  img: string
  img2?: string
  title: string
  description: string
}

export const ActivityData: ActivityI[] = [
  {
    img: "/svgs/activity1.svg",
    img2: "/svgs/activityc1.svg",
    title: "Adventure",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    img: "/svgs/activity2.svg",
    img2: "/svgs/activityc2.svg",
    title: "Camping",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    img: "/svgs/activity3.svg",
    img2: "/svgs/activityc3.svg",
    title: "Adventure",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    img: "/svgs/activity4.svg",
    img2: "/svgs/activityc4.svg",
    title: "Camping",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    img: "/svgs/activity5.svg",
    img2: "/svgs/activityc5.svg",
    title: "Adventure",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
  {
    img: "/svgs/activity6.svg",
    img2: "/svgs/activityc6.svg",
    title: "Camping",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  },
]


export interface TourDataI {
  img: string
  title: string
  day: number
  price: string
}

export const TourData: TourDataI[] = [
  {
    img: "/public/images/rome.png",
    title: "rome, italy",
    day: 10,
    price: "5.24K"
  },
  {
    img: "/public/images/pakistan.png",
    title: "Lahore, pakistan",
    day: 6,
    price: "3.24K"
  },
  {
    img: "/public/images/singapur.png",
    title: "singapore",
    day: 6,
    price: "7.00K"
  },
]

export interface PhotosI {
  img: string
  title: string
  description: string
}
export const PhotosData: PhotosI[] = [
  {
    img: '/public/images/photo1.png',
    title: "title",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    img: '/public/images/photo2.png',
    title: "title",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    img: '/public/images/photo3.png',
    title: "title",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    img: '/public/images/photo4.png',
    title: "title",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    img: '/public/images/photo5.png',
    title: "title",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    img: '/public/images/photo6.png',
    title: "title",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
]