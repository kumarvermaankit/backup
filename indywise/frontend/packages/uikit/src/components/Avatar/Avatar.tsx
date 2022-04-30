import * as React from 'react';
import styled from 'styled-components';

import { Icon } from '../Icons';

export interface IAvatarProps extends React.HTMLAttributes<HTMLImageElement> {
  /**
   * The source URL of the Avatar's image.
   *
   * @example `www.source.com/avatar.png`
   */
  src?: string;

  /**
   * Its describe the default value of avatar. If the src gaves error or not defined
   */
  type?: 'mentor' | 'mentee' | 'education' | 'employment';

  /**
   * The size of the Avatar.
   *
   * @example `32px`
   * @default `72px`
   */
  size?: string;

  /**
   * Custom CSS styles.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
}

export const Avatar: React.FC<IAvatarProps> = (props) => {
  const [error, setError] = React.useState(false);
  const style = props.style || {};

  // Failed to load the image
  const onError = () => {
    setError(true);
  };

  // If failed to load the image from `props.src` we will load default fallbacks
  if (error) {
    return (
      <AvatarBody style={style}>
        <Icon
          icon={
            props.type === 'employment'
              ? 'empDefaultAvatar'
              : props.type === 'education'
              ? 'eduDefaultAvatar'
              : props.type === 'mentee'
              ? 'defaultMentee'
              : 'defaultMentor'
          }
          size={props.size || '72px'}
        />
      </AvatarBody>
    );
  }

  if (props.src && props.src.trim() !== '') {
    return (
      <AvatarBody style={style}>
        <AvatarImage
          {...props}
          src={props.src}
          size={props.size}
          onError={onError}
        />
      </AvatarBody>
    );
  }

  return (
    <AvatarBody style={style}>
      <Icon
        icon={
          props.type === 'employment'
            ? 'empDefaultAvatar'
            : props.type === 'education'
            ? 'eduDefaultAvatar'
            : props.type === 'mentee'
            ? 'defaultMentee'
            : 'defaultMentor'
        }
        size={props.size || '72px'}
      />
    </AvatarBody>
  );
};

export const AvatarBody = styled.div`
  padding: 0;
  margin: 0;
`;

export const AvatarImage = styled.img<{ size: string | undefined }>`
  height: ${(props) => props.size || '72px'};
  width: ${(props) => props.size || '72px'};
  border-radius: 50%;
  object-fit: cover;
  margin: 0;
  padding: 0;
`;
