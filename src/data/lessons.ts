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

// Update these Google Drive links with your actual file links
export const currentWeeks: LessonWeek[] = [
  {
    label: 'This Week',
    lessons: [
      {
        id: 'tw-1',
        title: 'Toddler Lesson',
        subtitle: 'This week\'s toddler lesson packet',
        week: 'This Week',
        driveUrl: 'https://drive.google.com/file/d/1SgWcYieUPCcc7f6-H_4OAaRQOXPcB32j/view?usp=sharing',
        tags: ['PDF'],
      },
      {
        id: 'tw-2',
        title: 'Primary Lesson',
        subtitle: 'This week\'s primary lesson packet',
        week: 'This Week',
        driveUrl: 'https://drive.google.com/file/d/1HtzhaI9ZMIncyaJnsbDGBdqc6ARUIlxk/view?usp=sharing',
        tags: ['PDF'],
      },
      {
        id: 'tw-3',
        title: 'Elementary Lesson',
        subtitle: 'This week\'s elementary lesson packet',
        week: 'This Week',
        driveUrl: 'https://drive.google.com/file/d/140tyOv8XjVE_tGGnmYneRrBLmohL1jRe/view?usp=sharing',
        tags: ['PDF'],
      },
    ],
  },
  {
    label: 'Next Week',
    lessons: [
      {
        id: 'nw-1',
        title: 'Lesson Packet',
        subtitle: 'Full lesson plan + activities',
        week: 'Next Week',
        driveUrl: 'https://drive.google.com/your-link-here',
        tags: ['PDF'],
      },
      {
        id: 'nw-2',
        title: 'Coloring Pages',
        subtitle: 'Printable coloring sheets',
        week: 'Next Week',
        driveUrl: 'https://drive.google.com/your-link-here',
        tags: ['PDF'],
      },
    ],
  },
]

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
