import { Command } from "./Command";
import WarningBox from "./WarningBox";

export default function CommandBox({ command, perm = "?", flags, usage, translated = true }: Command) {
  const canonicalCommand = command.replace(/\s[\[|<].*/, "");
  const anchor = canonicalCommand.replaceAll("/", "").replaceAll(" ", "-");

  const flagBox = flags?.map((flag) => (
    <li key={flag.flag}>
      <code>{flag.flag}</code>: {flag.usage}
    </li>
  ));

  return (
    <>
      <section>
        <h3 id={`command-${anchor}`}>
          <a href={`#command-${anchor}`} className="no-underline">
            <code>{canonicalCommand}</code>
          </a>
        </h3>

        <h4>コマンド</h4>
        <pre>{command}</pre>

        <h4>権限</h4>
        <ul>
          {typeof perm === "string" ? (
            <li>
              <code>{perm}</code>
            </li>
          ) : (
            perm.map((p) => (
              <li key={p}>
                <code>{p}</code>
              </li>
            ))
          )}
        </ul>

        {flags ? (
          <>
            <h4>フラグ</h4>
            <ul>{flagBox}</ul>
          </>
        ) : (
          <></>
        )}

        {translated ? (
          <></>
        ) : (
          <WarningBox>
            <p>
              <strong>注意</strong>：未翻訳です。
            </p>
          </WarningBox>
        )}

        <h4>説明</h4>
        {usage}
      </section>
    </>
  );
}
