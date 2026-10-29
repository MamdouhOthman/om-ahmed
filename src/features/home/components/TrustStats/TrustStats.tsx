import styles from "@/features/home/styles/TrustStats.module.css";
import { ClockIcon, FacebookIcon, TikTokIcon } from "@/components/ui/icons";
import { FACEBOOK_URL, TIKTOK_URL } from "@/lib/constants";
import type { Dictionary } from "@/i18n/dictionary";

interface TrustStatsProps {
  dictionary: Dictionary;
}

const ICONS = {
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
  clock: ClockIcon,
} as const;

const LINKS: Partial<Record<keyof typeof ICONS, string>> = {
  facebook: FACEBOOK_URL,
  tiktok: TIKTOK_URL,
};

export function TrustStats({ dictionary }: TrustStatsProps) {
  const { trust } = dictionary;

  return (
    <section className={styles.section} aria-labelledby="trust-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="trust-heading" className={styles.title}>
            {trust.title}
          </h2>
          <p className={styles.subtitle}>{trust.subtitle}</p>
        </div>

        <dl className={styles.stats}>
          {trust.stats.map((stat) => {
            const Icon = ICONS[stat.icon];
            const url = LINKS[stat.icon];

            return (
              <div
                className={`${styles.stat} ${url ? styles.clickable : ""}`}
                key={stat.label}
              >
                <span className={styles.iconBadge}>
                  <Icon />
                </span>
                <div className={styles.text}>
                  <dt className={styles.value}>{stat.value}</dt>
                  <dd className={styles.label}>{stat.label}</dd>
                </div>
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    aria-label={stat.label}
                  />
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
