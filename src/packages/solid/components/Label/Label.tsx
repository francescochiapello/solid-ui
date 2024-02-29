import { type Component } from 'solid-js';
import { Text } from '@lightningjs/solid';
import type { IntrinsicNodeProps } from '@lightningjs/solid';
import styles, { type LabelStyles } from './Label.styles.js';
import { withPadding } from '@lightningjs/solid-primitives';
import type { Tone } from '../../types.js';
withPadding;

export interface LabelProps extends IntrinsicNodeProps {
  /**
   * text to display in label
   */
  title: string;

  style?: Partial<LabelStyles>;

  tone?: Tone;
}

const Label: Component<LabelProps> = props => {
  console.log(styles);
  return (
    <node
      use:withPadding={props?.style?.Container?.padding ?? styles.Container.base.padding}
      {...props}
      style={[
        ...[props.style].flat(), //
        styles.Container.tones[props.tone || styles.tone],
        styles.Container.base
      ]}
      forwardStates
    >
      <Text
        style={[
          props.style?.Text, //
          styles.Text.tones[props.tone || styles.tone],
          styles.Text.base
        ]}
      >
        {props.title}
      </Text>
    </node>
  );
};

export default Label;
