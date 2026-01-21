# Astro Bible

A simple Bible app created using [YouVersion's React Web SDK](https://developers.youversion.com/sdks/react) in [Astro web framework](https://astro.build).

```bash
bun i
```

Get your public API Key at https://platform.youversion.com/platform

```bash
cp .env.example .env
```

```bash
bun run dev
```

## Things I learned...

- Default Bible Version ID cannot be NIV, because it's something you opt into. We need to use a pre-existing free version, like BSB who is ID `3034`
- `BibleReader.Toolbar` requires `includeAuth={true}` for the `YouVersionProvider`, but I don't think it's needed. I want to be able to use the toolbar without auth. So... we should make this optional.
