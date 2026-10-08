// LTU Orthopedic Surgery Simulation - Interactive Activity Switcher

document.addEventListener('DOMContentLoaded', () => {
  const activities = {
    A: {
      badge: "Activity A",
      week: "Week 2: Sports Injuries & Musculoskeletal Anatomy",
      title: "Build Lower Extremity Musculoskeletal Model",
      summary: "Students construct a 1:1 anatomical lower limb from synthetic skeletal components. Custom-shaped foam muscle bellies (Quadriceps, Hamstrings, IT Band, TFL, Hip Abductors, and Gastrocnemius) are mapped to anatomical insertion coordinates to understand lines of action and joint stabilization.",
      clinicalNeed: "Understanding muscle lines of action, moment arms, and multi-planar forces across hip and knee joints during athletic movements.",
      tooling: "Sawbones synthetic femurs/tibias, high-density foam muscle forms, anatomical mapping guides, soft tissue compression sleeves.",
      competencies: "Musculoskeletal geometry, joint equilibrium, anatomical terminology, kinematic moment arm estimation.",
      image: "ortho_activities_curriculum.png"
    },
    B: {
      badge: "Activity B",
      week: "Week 3: Ligament Tears & Knee Kinematics",
      title: "Arthroscopic ACL Reconstruction",
      summary: "Simulating bone-tendon-bone and hamstring autograft/allograft reconstruction. Students use tibial aiming guides, cannulated drill bits, and beath pins to drill tibial and femoral bone tunnels, pass tendon grafts, and achieve aperture fixation with bioabsorbable interference screws.",
      clinicalNeed: "Restoring knee anterior-posterior and rotational stability following acute anterior cruciate ligament rupture in active patients.",
      tooling: "Tibial drill guides, cannulated reamers, beath passing pins, bioabsorbable interference screws, driver ratchets, synthetic knee joint models.",
      competencies: "Tunnel isometry, aperture graft fixation mechanics, screw insertion torque, ligament pre-tensioning.",
      image: "BME_OrthopedicSurgerySimulation.jpg"
    },
    C: {
      badge: "Activity C",
      week: "Week 4: Cartilage Degeneration & Osteoarthritis",
      title: "Total Hip Arthroplasty (THA)",
      summary: "Students perform femoral neck osteotomy, acetabular hemispherical reaming, and press-fit acetabular shell placement. They incrementally broach the femoral intramedullary canal, seat modular titanium stems, and evaluate range-of-motion to prevent dislocation.",
      clinicalNeed: "End-stage osteoarthritis, femoral neck fracture, or avascular necrosis requiring joint replacement to relieve pain and restore mobility.",
      tooling: "Acetabular hemispherical reamers, trial cups, femoral canal rasps/broaches, modular stems, prosthetic femoral heads, oscillating saw.",
      competencies: "Press-fit interference mechanics, femoral anteversion, hip center of rotation, impingement and dislocation avoidance.",
      image: "ortho_simulation_methods.png"
    },
    D: {
      badge: "Activity D",
      week: "Week 5: Bone Fractures & Trauma Fixation",
      title: "Open Reduction Internal Fixation (ORIF)",
      summary: "Students reduce simulated transverse and oblique diaphyseal bone fractures using reduction forceps. They contour dynamic compression plates (DCP), drill pilot holes with eccentric drill guides, gauge depths, and drive bicortical titanium screws to create interfragmentary compression.",
      clinicalNeed: "Unstable or displaced diaphyseal bone fractures requiring anatomical reduction and rigid internal fixation to achieve primary bone healing.",
      tooling: "Dynamic compression plates (DCP), bone reduction forceps, eccentric drill guides, depth gauges, cortical bone taps, 3.5mm titanium screws.",
      competencies: "Interfragmentary compression, dynamic load sharing vs. stress shielding, bicortical screw purchase, plate pre-bending.",
      image: "ortho_activities_curriculum.png"
    },
    E: {
      badge: "Activity E",
      week: "Week 6: Spinal Column & Deformity Correction",
      title: "Posterior Lumbar Spine Stabilization",
      summary: "Working on multi-segment synthetic lumbar spines, students identify pedicle entry anatomy, probe pedicle pathways with gear-shift probes, verify bony boundaries, insert polyaxial pedicle screws, contour connecting cobalt-chrome spinal rods, and torque set screws.",
      clinicalNeed: "Lumbar instability, spondylolisthesis, severe scoliosis, or trauma requiring rigid posterior fusion.",
      tooling: "Pedicle awl, gear-shift probe, ball-tip feeler, polyaxial pedicle screws, rod French bender, set screws, anti-torque driver.",
      competencies: "Pedicle anatomical trajectory, screw pull-out strength in cancellous bone, spinal sagittal alignment, rigid rod mechanics.",
      image: "ortho_simulation_methods.png"
    },
    F: {
      badge: "Activity F",
      week: "Week 8: Implant Stability & Osseointegration",
      title: "Dental Implants & Osseodensification",
      summary: "Conducted in collaboration with Versah LLC. Students execute clinical surgical osteotomy protocols under continuous saline irrigation. They compare conventional bone-excavating drills with patented Densah® osseodensification burs, recording insertion torque and primary stability.",
      clinicalNeed: "Maximizing primary implant stability in compromised or low-density trabecular bone without requiring extensive autografting.",
      tooling: "Dental surgical implant motor, saline peristaltic irrigation pump, Densah® osseodensification burs, torque ratchet, osteotomy blocks.",
      competencies: "Hydrodynamic wave compaction, non-cutting reverse bur rotation, insertion torque (N·cm), primary vs secondary osseointegration stability.",
      image: "BME_DentalImplantsSimulation.jpg"
    },
    G: {
      badge: "Activity G",
      week: "Week 9: Custom Implants & 3D Medical Printing",
      title: "Patient-Specific 3D Cranioplasty Skull Plate",
      summary: "Students import clinical DICOM CT patient scans into Materialise Mimics and 3-matic. They threshold bone density, reconstruct complex cranial defects, digitally model a patient-specific cranial repair prosthesis, 3D print the prosthesis, and verify surgical margin congruence.",
      clinicalNeed: "Reconstructing traumatic skull defects or decompressive craniectomy voids with patient-matched anatomical contours.",
      tooling: "Materialise Mimics Innovation Suite, 3-matic CAD, medical FDM/stereolithography 3D printers, synthetic skull models.",
      competencies: "DICOM segmentation, Hounsfield unit thresholding, patient-specific implant (PSI) design, additive manufacturing tolerances.",
      image: "ortho_activities_curriculum.png"
    },
    VR: {
      badge: "Virtual Reality",
      week: "Week 1: Immersive Robotics & Haptics",
      title: "Virtual Surgery with 3D Systems Touch Haptic Feedback",
      summary: "Using 3D Systems Touch haptic robotic arms integrated with HTC Vive VR headsets, students experience realistic kinematic resistance when sawing bone, reaming the acetabular cup, or encountering cortical bone breakthrough, bridging physical and computational modeling.",
      clinicalNeed: "Pre-operative surgical training and rehearsal without risk to patients or consumption of physical cadaveric specimens.",
      tooling: "HTC Vive Pro VR headsets, 3D Systems Touch haptic robotic stylus, surgical simulation physics engine.",
      competencies: "Haptic force feedback perception, virtual bone resection tolerances, robotic surgical navigation, hand-eye surgical coordination.",
      image: "ortho_simulation_methods.png"
    },
    PBL: {
      badge: "Innovation",
      week: "Week 10: Medical Device Innovation & IP",
      title: "PBL Clinician-Engineer Opportunity Creation",
      summary: "Authentic prompt: 'A surgeon has contacted you through the LTU Innovation Center / Centrepolis Accelerator because of your expertise in Biomedical Engineering: Build and Test a new type of Orthopedic Implant.' Student teams propose concepts, prototype devices, test biomechanics, and draft FDA 510(k) strategies.",
      clinicalNeed: "Translating unmet clinical surgical needs into commercial medical products with viable intellectual property and regulatory pathways.",
      tooling: "CAD SolidWorks, rapid prototyping labs, materials test frames, FDA guidance databases, USPTO patent search.",
      competencies: "Customer discovery, entrepreneurial mindset, predicate device analysis (510k), mechanical bench testing protocols.",
      image: "ortho_clinicians_pbl.png"
    }
  };

  const container = document.getElementById('activityDisplayCard');
  const buttons = document.querySelectorAll('#activityTabNav .tab-btn');

  function renderActivity(key) {
    const act = activities[key];
    if (!act || !container) return;

    container.innerHTML = `
      <div class="act-grid">
        <div>
          <span class="act-badge-large"><i class="bi bi-gear-wide-connected"></i> ${act.badge}</span>
          <div class="act-week">${act.week}</div>
          <h3 class="act-title">${act.title}</h3>
          <p class="act-summary">${act.summary}</p>
          
          <div class="act-details-box">
            <div class="act-detail-row">
              <strong><i class="bi bi-hospital"></i> Clinical Indication &amp; Purpose:</strong>
              <span>${act.clinicalNeed}</span>
            </div>
            <div class="act-detail-row">
              <strong><i class="bi bi-tools"></i> Surgical Tooling &amp; Simulation Setup:</strong>
              <span>${act.tooling}</span>
            </div>
            <div class="act-detail-row">
              <strong><i class="bi bi-mortarboard-fill"></i> Core Engineering Competencies:</strong>
              <span>${act.competencies}</span>
            </div>
          </div>

          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <a href="SB3C2020_OrthopedicSurgery_ActiveLearning.pdf" target="_blank" class="btn btn-outline btn-sm">
              <i class="bi bi-file-earmark-pdf"></i> View Activity in Slide Deck
            </a>
            <a href="https://engineeringunleashed.com/card/1047" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm">
              <i class="bi bi-lightbulb"></i> KEEN Card #1047
            </a>
          </div>
        </div>

        <div class="act-img-box">
          <img src="${act.image}" alt="${act.title}" loading="lazy">
        </div>
      </div>
    `;
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const actKey = btn.getAttribute('data-act');
      renderActivity(actKey);
    });
  });

  // Default render
  renderActivity('A');
});
