export interface Lesson {
  id: string
  title: string
  subtitle: string
  week: string
  driveUrl: string
  tags?: string[]
}

export interface LessonWeek {
  label: string
  lessons: Lesson[]
}

export interface CurrentLesson {
  lessonNumber: string
  title: string
  dates: string
  scripture: string
  intro: string
  bundles: Bundle[]
}

export interface Bundle {
  id: string
  label: string
  subtitle: string
  emoji: string
  driveUrl: string
}

export const currentLesson: CurrentLesson = {
  lessonNumber: 'Lesson 20',
  title: '"Beware Lest Thou Forget the Lord"',
  dates: 'May 11–17',
  scripture: 'Deuteronomy 6–8; 15; 18; 29–30; 34',
  intro: 'Moses taught that faith is best nurtured through the natural rhythms of family life rather than through formal lessons alone. He commanded parents: "Thou shalt teach them diligently unto thy children, and shalt talk of them when thou sittest in thine house, and when thou walkest by the way" (Deuteronomy 6:7). Integrating gospel conversations into daily activities helps our children guard against "forgetting the Lord" during times of ease and prosperity.\n\nThis teaching prepares children to "choose life" by loving God with all their hearts. By modeling service and a "willing heart," we can lead our families toward Jesus Christ, the great Prophet whom Moses foreshadowed.',
  bundles: [
    {
      id: 'b-1',
      label: 'Toddler Bundle',
      subtitle: 'Home & Nursery',
      emoji: '🧸',
      driveUrl: 'https://drive.google.com/file/d/1SgWcYieUPCcc7f6-H_4OAaRQOXPcB32j/view?usp=sharing',
    },
    {
      id: 'b-2',
      label: 'Elementary Bundle',
      subtitle: 'Home & Primary',
      emoji: '✏️',
      driveUrl: 'https://drive.google.com/file/d/140tyOv8XjVE_tGGnmYneRrBLmohL1jRe/view?usp=sharing',
    },
    {
      id: 'b-3',
      label: 'Primary Bundle',
      subtitle: 'Home & Primary',
      emoji: '📖',
      driveUrl: 'https://drive.google.com/file/d/1HtzhaI9ZMIncyaJnsbDGBdqc6ARUIlxk/view?usp=sharing',
    },
    {
      id: 'b-4',
      label: 'Teen Bundle',
      subtitle: 'Home & Sunday School',
      emoji: '🎒',
      driveUrl: 'https://drive.google.com/your-teen-bundle-link-here',
    },
  ],
}

export const pastLessons: Lesson[] = [
  {
    id: 'pl-1',
    title: 'Week 1 Lesson Packet',
    subtitle: 'Genesis 1–2 · The Creation',
    week: 'Jan 1–7',
    driveUrl: 'https://drive.google.com/your-link-here',
    tags: ['PDF'],
  },
  {
    id: 'pl-2',
    title: 'Week 2 Lesson Packet',
    subtitle: 'Genesis 3–4 · The Fall',
    week: 'Jan 8–14',
    driveUrl: 'https://drive.google.com/your-link-here',
    tags: ['PDF'],
  },
  {
    id: 'pl-3',
    title: 'Week 3 Lesson Packet',
    subtitle: 'Genesis 5, Moses 8 · Noah',
    week: 'Jan 15–21',
    driveUrl: 'https://drive.google.com/your-link-here',
    tags: ['PDF'],
  },
  {
    id: 'pl-4',
    title: 'Week 4 Lesson Packet',
    subtitle: 'Genesis 6–11 · Tower of Babel',
    week: 'Jan 22–28',
    driveUrl: 'https://drive.google.com/your-link-here',
    tags: ['PDF'],
  },
]
