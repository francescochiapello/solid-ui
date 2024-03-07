/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { type Component } from 'solid-js';
import { View, Text, type NodeProps } from '@lightningjs/solid';
import type { Tone } from '../../types/types.js';
import styles, { type ButtonStyles } from './Button.styles.js';

interface ButtonProps extends NodeProps {
  children: string | string[];
  tone?: Tone;
  style?: Omit<ButtonStyles, 'tone'>;
}

interface ButtonContainerProps extends NodeProps {
  tone?: Tone;
  style?: Omit<ButtonStyles, 'tone' | 'Text'>;
}

const Button: Component<ButtonProps> = props => {
  return (
    <View
      {...props}
      style={[
        ...[props.style].flat(), //
        styles.Container.tones?.[props.tone ?? styles.tone],
        styles.Container.base
      ]}
      forwardStates
    >
      <Text
        style={[
          ...[props.style?.Text].flat(), //
          styles.Text.tones[props.tone ?? styles.tone],
          styles.Text.base
        ]}
      >
        {props.children}
      </Text>
    </View>
  );
};

const ButtonContainer: Component<ButtonContainerProps> = props => {
  return (
    <View
      {...props}
      style={[
        ...[props.style].flat(), //
        styles.Container.tones?.[props.tone ?? styles.tone],
        styles.Container.base
      ]}
      forwardStates
    />
  );
};

export { Button as default, ButtonContainer, type ButtonProps, type ButtonContainerProps };
