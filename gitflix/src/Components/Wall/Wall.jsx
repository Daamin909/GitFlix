import React from "react";
import {
  Star,
  GitFork,
  Code,
  Users,
  Clock,
  Eye,
  Scale,
  HardDrive,
} from "lucide-react";
import "./Wall.css";

const Wall = ({ repoData }) => {
  const {
    name,
    owner,
    description,
    url,
    created,
    updated,
    visibility,
    license,
    size_kb,
    stars,
    forks,
    primary_language,
    languages,
    contributors,
    fun_facts,
  } = repoData;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const blockColors = [
    "#E50914",
    "#0077B5",
    "#1DB954",
    "#FF9900",
    "#6441A4",
    "#00B7FF",
  ];

  return (
    <div className="repo-wall">
      <div
        className="repo-block main-info"
        style={{ "--block-color": blockColors[0] }}
      >
        <h2 className="nameme">{name}</h2>
        <p>
          <a>
            <strong>Owner:</strong>{" "}
          </a>
          <a
            href={owner.profile_url}
            style={{ textDecoration: "none", color: "lime" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {owner.username}
          </a>
        </p>
        <p
          style={{
            display: "flex",
            gridTemplateColumns: "35% 65%",
            justifyContent: "space-between",
          }}
        >
          <strong>Description:</strong>{" "}
          <a style={{ textAlign: "right" }}>
            {description.length > 29
              ? description.slice(0, 28) + "..."
              : description}
          </a>
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-link"
        >
          View on GitHub
        </a>
      </div>

      <div
        className="repo-block stats"
        style={{ "--block-color": blockColors[1] }}
      >
        <h3>Repository Stats</h3>
        <p>
          <a>
            <Star size={16} /> <strong>Stars:</strong>
          </a>
          {stars}
        </p>
        <p>
          <a>
            <GitFork size={16} /> <strong>Forks:</strong>
          </a>
          {forks}
        </p>
        <p>
          <a>
            <Code size={16} /> <strong>Primary Language:</strong>
          </a>
          {primary_language}
        </p>
        <p>
          <a>
            {" "}
            <HardDrive size={16} /> <strong>Size:</strong>{" "}
          </a>
          {size_kb} KB
        </p>
        <p>
          <a>
            <Eye size={16} /> <strong>Visibility:</strong>
          </a>
          {visibility}
        </p>
        <p>
          <a>
            <Scale size={16} /> <strong>License:</strong>
          </a>
          {(license.length > 29 ? license.slice(0, 28) + "..." : license) ||
            "Not specified"}
        </p>
      </div>

      <div
        className="repo-block timeline"
        style={{ "--block-color": blockColors[2] }}
      >
        <h3>Timeline</h3>
        <p>
          <a>
            <Clock size={16} /> <strong>Created:</strong>
          </a>
          {formatDate(created)}
        </p>
        <p>
          <a>
            <Clock size={16} /> <strong>Last Updated:</strong>{" "}
          </a>
          {formatDate(updated)}
        </p>
      </div>

      <div
        className="repo-block languages"
        style={{ "--block-color": blockColors[3] }}
      >
        <h3>Languages</h3>
        {Object.entries(languages).map(([lang, bytes]) => (
          <p key={lang}>
            <strong>{lang}:</strong> {bytes} bytes
          </p>
        ))}
      </div>

      <div
        className="repo-block contributors"
        style={{ "--block-color": blockColors[4] }}
      >
        <h3>Top Contributors</h3>
        {contributors.map((contributor) => (
          <div key={contributor.username} className="contributor">
            <img
              src={contributor.avatar_url}
              alt={contributor.username}
              className="contributor-avatar"
            />
            <p>
              <strong>{contributor.username}</strong>:{" "}
              {contributor.contributions} contributions
            </p>
          </div>
        ))}
      </div>

      <div
        className="repo-block fun-facts"
        style={{ "--block-color": blockColors[5] }}
      >
        <h3>Fun Facts</h3>
        <p>
          <strong>Age:</strong> {fun_facts.age_in_days} days
        </p>
        <p>
          <strong>Most Active:</strong> {fun_facts.most_active_contributor}
        </p>
        <p>
          <strong>Most Used:</strong> {fun_facts.most_used_language}
        </p>
        <div className="extra-info">
          <p>
            <Users size={16} /> {fun_facts.contributors}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wall;



