import { Command } from "./Command";

export default function CommandBox({
  command,
  perm = "?",
  flags,
  usage,
}: Command) {
  const canonicalCommand = command.replace(/\s[\[|<].*/, "");
  const anchor = canonicalCommand.replaceAll("/", "").replaceAll(" ", "-");

  return (
    <>
      <section>
        <h3 id={`command-${anchor}`}>
          <a href={`#command-${anchor}`} className="no-underline">
            <code>{canonicalCommand}</code>
          </a>
        </h3>
        <pre>{command}</pre>
        <p>
          権限: <code>{perm}</code>
        </p>

        {usage}
      </section>
    </>
  );
}
