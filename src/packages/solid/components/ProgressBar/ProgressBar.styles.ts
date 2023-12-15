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

import { type NodeStyles } from '@lightningjs/solid';
import theme from 'theme';
import type { Color, Animatable, Tone } from 'types';
import { makeComponentStyles, type LookupObject } from '../../utils/index.js';

export interface ProgressBarStyle {
  tone: Tone;
  Container: NodeStyles;
  ProgressBar: NodeStyles;
}

export type ProgressBarStyleProperties = {
  height: number;
  color: Animatable<Color>;
  borderRadius: number;
};

const { ProgressBar: { styles: themeStyles, tone } = { styles: {}, tone: 'neutral' } } =
  theme?.componentConfig;

const container = {
  themeKeys: {
    color: 'barColor',
    borderRadius: 'borderRadius'
  },
  base: {
    height: theme.spacer.md,
    color: theme.color.fillNeutralTertiary,
    borderRadius: theme.radius.xs
  },
  toneModes: {
    inverse: {
      color: theme.color.fillInverseTertiary
    }
  }
};

const progress = {
  themeKeys: {
    color: 'progressColor',
    borderRadius: 'borderRadius'
  },
  base: {
    borderRadius: theme.radius.xs,
    color: theme.color.fillNeutral
  },
  toneModes: {
    inverse: {
      color: theme.color.fillInverse
    },
    brand: {
      color: theme.color.fillBrand
    }
  }
};

const progressBarTonesModes: LookupObject<ProgressBarStyleProperties> = {};

const styles: ProgressBarStyle = {
  tone: tone || 'neutral',
  Container: {
    ...makeComponentStyles(container.themeKeys, container.base, container.toneModes, themeStyles)
  },
  ProgressBar: {
    ...makeComponentStyles(progress.themeKeys, progress.base, progress.toneModes, themeStyles)
  }
} as const;

export default styles;
