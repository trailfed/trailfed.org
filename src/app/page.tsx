import Link from 'next/link';
import { servers, categoryLabels } from '@/data/servers';

export default function Home() {
  return (
    <>
      <header className="border-b border-ink/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-trail">●</span>
            <span>TrailFed</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#what" className="hover:text-trail">What is it</a>
            <a href="#servers" className="hover:text-trail">Servers</a>
            <a href="https://github.com/trailfed/trailfed" className="hover:text-trail">GitHub</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-trail">Phase 0 — public scaffold</p>
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            Federated geo-social<br />
            <span className="text-trail">for travellers.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/70">
            An open protocol and self-hosted server for people on the move — van-lifers, overlanders,
            sailors, cyclists, anglers, hikers, digital nomads. Built on ActivityPub and OpenStreetMap.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#servers"
              className="rounded-full bg-trail px-6 py-3 text-sm font-semibold text-paper hover:bg-trail/90"
            >
              Find a server
            </a>
            <a
              href="https://github.com/trailfed/trailfed"
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold hover:border-ink/40"
            >
              Read the code
            </a>
          </div>
        </section>

        <section id="what" className="border-y border-ink/10 bg-white/40">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mb-10 text-3xl font-bold">Why TrailFed</h2>
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="mb-2 font-semibold">Your data, your server</h3>
                <p className="text-ink/70">
                  No centralised operator to shut you down or sell your location history. Communities
                  run their own instances — vanlife, fishing, motorbiking, sea-faring — and still
                  exchange data with allied peers.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">OpenStreetMap-native</h3>
                <p className="text-ink/70">
                  OSM stays primary for base geography. TrailFed adds the human layer on top — reviews,
                  ephemeral amenities, check-ins, travel stories. ODbL-compliant import and export.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">ActivityPub under the hood</h3>
                <p className="text-ink/70">
                  The same federation protocol powering Mastodon, extended with geo types for places
                  and trajectories. Your account works across the whole fediverse.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="servers">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mb-2 text-3xl font-bold">Pick a server</h2>
            <p className="mb-10 text-ink/70">
              Anyone can host a TrailFed instance. These are known public servers.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {servers.map((s) => (
                <a
                  key={s.domain}
                  href={`https://${s.domain}`}
                  className="block rounded-xl border border-ink/10 bg-white/60 p-6 hover:border-trail/40"
                >
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="font-semibold">{s.name}</h3>
                    <span className="rounded bg-ember/10 px-2 py-0.5 text-xs uppercase tracking-wide text-ember">
                      {s.phase}
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-ink/70">{s.description}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink/50">
                    <span>{categoryLabels[s.category]}</span>
                    <span>{s.language.toUpperCase()}</span>
                    <span>{s.region}</span>
                    <span>signup: {s.signup}</span>
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm text-ink/60">
              Running your own? Open a PR to{' '}
              <a
                href="https://github.com/trailfed/trailfed.org/blob/main/src/data/servers.ts"
                className="underline hover:text-trail"
              >
                src/data/servers.ts
              </a>
              .
            </p>
          </div>
        </section>

        <section className="border-t border-ink/10 bg-white/40">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mb-10 text-3xl font-bold">Get involved</h2>
            <div className="grid gap-8 sm:grid-cols-3 text-sm">
              <div>
                <h3 className="mb-2 font-semibold">Code</h3>
                <p className="text-ink/70">
                  Server + web client on{' '}
                  <a href="https://github.com/trailfed/trailfed" className="underline hover:text-trail">
                    github.com/trailfed/trailfed
                  </a>
                  . AGPL-3.0.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Docs &amp; spec</h3>
                <p className="text-ink/70">
                  Architecture, ADRs and federation spec live in the main repo under{' '}
                  <code className="rounded bg-ink/5 px-1 py-0.5">docs/</code>.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Security</h3>
                <p className="text-ink/70">
                  Report vulnerabilities to{' '}
                  <a href="mailto:security@trailfed.org" className="underline hover:text-trail">
                    security@trailfed.org
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 py-10 text-center text-xs text-ink/50">
        <p>
          TrailFed is free software released under the{' '}
          <a href="https://www.gnu.org/licenses/agpl-3.0.html" className="underline hover:text-trail">
            AGPL-3.0-or-later
          </a>
          . OpenStreetMap data © OSM contributors, under{' '}
          <a href="https://opendatacommons.org/licenses/odbl/" className="underline hover:text-trail">
            ODbL
          </a>
          .
        </p>
        <p className="mt-2">
          <a href="https://github.com/trailfed" className="underline hover:text-trail">
            github.com/trailfed
          </a>
          {' · '}
          <a href="mailto:info@trailfed.org" className="underline hover:text-trail">
            info@trailfed.org
          </a>
        </p>
      </footer>
    </>
  );
}
