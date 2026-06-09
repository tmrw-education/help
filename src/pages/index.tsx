import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const apps = [
  {
    id: 'sxp',
    name: 'StaffXP',
    description: 'Day-to-day tools for teachers, admin, and school leaders.',
    href: '/help/sxp',
  },
  {
    id: 'ess',
    name: 'Employee Self-Service',
    description: 'HR tasks for all staff — leave, benefits, documents, and more.',
    href: '/help/ess',
  },
  {
    id: 'fo',
    name: 'Finance & Operations',
    description: 'Billing, fees, and financial management for bursars and accountants.',
    href: '/help/fo',
  },
  {
    id: 'pxp',
    name: 'Parent Experience',
    description: 'Everything parents need — notices, attendance, and communication.',
    href: '/help/pxp',
  },
  {
    id: 'lxp',
    name: 'Learner Experience',
    description: 'Help for students using the tmrw learner platform.',
    href: '/help/lxp',
  },
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Help" description={siteConfig.tagline}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>How can we help?</h1>
          <p>Select the app you need help with.</p>
        </div>
        <div className={styles.grid}>
          {apps.map((app) => (
            <Link key={app.id} to={app.href} className={styles.card}>
              <h2>{app.name}</h2>
              <p>{app.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
