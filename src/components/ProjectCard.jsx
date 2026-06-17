import './ProjectCard.css'

const ProjectCard = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <div className="project-card">

      <div
        className="project-card-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      <div className="project-card-overlay" />

      <div className="project-card-content">

        <p className="project-card-label">
          Development Domain
        </p>

        <h3>{title}</h3>

        <p className="project-card-subtitle">
          {subtitle}
        </p>

        <div className="project-card-line" />

        <span className="project-card-link">
          Explore →
        </span>

      </div>

    </div>
  )
}

export default ProjectCard