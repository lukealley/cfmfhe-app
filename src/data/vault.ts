export interface VaultResource {
  month: string
  title: string
  description: string
  driveUrl: string
  emoji: string
}

// Swap this out each month with the new surprise resource
const vault: VaultResource = {
  month: 'May 2026',
  title: 'Family Scripture Journal',
  description:
    'A beautifully designed printable journal to help your family record thoughts, testimonies, and favorite scriptures from this month\'s Come Follow Me study.',
  driveUrl: 'https://drive.google.com/your-vault-link-here',
  emoji: '📖',
}

export default vault
