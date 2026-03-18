import { SoftwareSkillType } from '@/lib/types';

import { Icon } from '@iconify/react';
import Image from 'next/image';

type Props = {
  skill: SoftwareSkillType;
};

const SkillIcon = ({ skill }: Props) => {
  const { icon, image, name, url, alt } = skill;

  const iconItem = (
    <div
      className={`relative grid shadow-md bg-bg-secondary dark:shadow-xl place-items-center group ${image
        ? 'rounded-xl min-h-14 min-w-14 px-2 py-2 sm:min-h-16 sm:min-w-16'
        : 'text-2xl rounded-full h-14 w-14 sm:h-16 sm:w-16'
        }`}
    >
      {icon ? (
        <Icon icon={icon} width="32" height="32" />
      ) : image ? (
        <Image
          src={image}
          alt={alt || name}
          width={120}
          height={40}
          unoptimized
          className="max-h-8 max-w-[120px] object-contain sm:max-h-10"
        />
      ) : null}

      <div className="absolute invisible px-2 py-1 text-sm text-white capitalize duration-200 rounded opacity-0 w-max group-hover:opacity-100 group-hover:visible -top-8 bg-slate-900/75 dark:bg-slate-700/90 dark:text-slate-100">
        {name}
        <svg
          className="absolute left-0 w-full h-2 text-slate-900/75 dark:text-slate-700/90 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );

  return url ? (
    <a href={url} target="_blank" rel="noreferrer" aria-label={name}>
      {iconItem}
    </a>
  ) : (
    iconItem
  );
};

export default SkillIcon;
