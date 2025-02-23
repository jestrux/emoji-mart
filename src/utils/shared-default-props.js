const EmojiDefaultProps = {
  skin: 1,
  set: 'apple',
  sheetSize: 64,
  sheetColumns: 52,
  sheetRows: 52,
  native: false,
  forceSize: false,
  tooltip: false,
  backgroundImageFn: (set, sheetSize) =>
    `https://unpkg.com/emoji-datasource-${set}@${EMOJI_DATASOURCE_VERSION}/img/${set}/sheets-256/${sheetSize}.png`,
}

const PickerDefaultProps = {
  onClick: () => {},
  onSearchFocused: () => {},
  onSelect: () => {},
  onSkinChange: () => {},
  emojiSize: 24,
  perLine: 9,
  i18n: {},
  style: {},
  title: 'Emoji Mart™',
  emoji: 'department_store',
  color: '#ae65c5',
  set: EmojiDefaultProps.set,
  skin: null,
  defaultSkin: EmojiDefaultProps.skin,
  native: EmojiDefaultProps.native,
  sheetSize: EmojiDefaultProps.sheetSize,
  backgroundImageFn: EmojiDefaultProps.backgroundImageFn,
  emojisToShowFilter: null,
  showPreview: true,
  showSkinTones: true,
  emojiTooltip: EmojiDefaultProps.tooltip,
  autoFocus: false,
  custom: [],
  skinEmoji: '',
  notFound: () => {},
  notFoundEmoji: 'sleuth_or_spy',
  icons: {},
}

export { PickerDefaultProps, EmojiDefaultProps }
