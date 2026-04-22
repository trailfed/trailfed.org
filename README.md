# trailfed.org

Source for [trailfed.org](https://trailfed.org) — the landing site and server directory for the [TrailFed project](https://github.com/trailfed/trailfed).

## Stack

- Next.js 15 (App Router, standalone output)
- React 19
- Tailwind CSS 3
- TypeScript

## Develop

```sh
npm install        # or pnpm / yarn
npm run dev        # http://localhost:3000
npm run build
npm start
```

## Add your server to the directory

Edit [`src/data/servers.ts`](./src/data/servers.ts) and open a PR.

## License

AGPL-3.0-or-later. See [LICENSE](./LICENSE).
