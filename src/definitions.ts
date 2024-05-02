export interface AndroidTvPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
