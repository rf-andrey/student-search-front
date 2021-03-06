type Direction = 'row' | 'column';
type Align = 'flex-start' | 'flex-end' | 'center';
type Justify =
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'center';

interface BoxProps {
  marginTop?: number;
}

interface FlexBoxProps extends BoxProps {
  direction?: Direction;
  align?: Align;
  justify?: Justify;
  gap?: number;
}

export type { FlexBoxProps, BoxProps };
