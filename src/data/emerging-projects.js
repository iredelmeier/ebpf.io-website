const emergingProjects = [
  {
    logoUrl: "https://github.com/pyroscope-io/pyroscope",
    name: "Pyroscope",
    logoName: 'pyroscopeLogo',
    title: "Continuous Profiling Platform",
    description: `Pyroscope is an open source project centered around
    continuous profiling, particularly in a Kubernetes context.
    It leverages eBPF as its core technology along with a custom storage engine
    to offer system-wide continuous profiling with minimal overhead
    as well as efficient storage and querying capabilities.
    We support Linux 4.9 and up thanks to CO-RE and libbpf.
    `,
    urls: [
      { label: "GitHub", url: "https://github.com/pyroscope-io/pyroscope" },
      { label: "Website", url: "https://pyroscope.io/" },
    ],
  },
  {
    logoUrl: "https://github.com/ehids/ecapture",
    name: "eCapture",
    logoName: 'ecaptureLogo',
    title: "SSL/TLS capture tool using eBPF",
    description: `eCapture is a tool that can capture plaintext without a CA
    certificate. It supports TLS encryption libraries such as
    openssl/gnutls/nspr etc. The userspace code is written in Go and
    uses cilium/ebpf. It can work on Linux Kernel 4.18 and later, and
    supports CO-RE features. At the same time, it also works without
    BTF.`,
    urls: [{ label: "GitHub", url: "https://github.com/ehids/ecapture" }],
  },
  {
    logoUrl: "https://github.com/parca-dev/parca",
    name: "Parca",
    logoName: 'parcaLogo',
    title: "Continuous Profiling Platform",
    description: `Track memory, CPU, I/O bottlenecks broken down by method
    name, class name, and line number over time. Without complex overhead, in
    any language or framework. Using Parca's UI the data can be globally
    explored and analyzed using various visualizations to quickly and
    efficiently identify bottlenecks in code. Parca uses eBPF to collect
    profiling data and uses libbpf-go to interact with the kernel.`,
    urls: [
      { label: "GitHub", url: "https://github.com/parca-dev/parca" },
      { label: "Website", url: "https://parca.dev" },
    ],
  },
  {
    logoUrl: "https://github.com/cilium/hubble",
    name: "Hubble",
    logoName: 'hubbleLogo',
    title:
      "Network, Service & Security Observability for Kubernetes using eBPF",
    description: `Hubble is a fully distributed networking and security observability
    platform for cloud native workloads. It is built on top of Cilium
    and eBPF to enable deep visibility into the communication and
    behavior of services as well as the networking infrastructure in a
    completely transparent manner.`,
    urls: [
      { label: "GitHub", url: "https://github.com/cilium/hubble" },
      { label: "Website", url: "https://cilium.io/" },
    ],
  },
  {
    logoUrl: "https://github.com/aquasecurity/tracee",
    name: "Tracee",
    logoName: 'traceeLogo',
    title: "Linux Runtime Security and Forensics using eBPF",
    description: `Tracee uses eBPF technology to detect and filter operating system
    events, helping you expose security insights, detect suspicious
    behavior, and capture forensic indicators.`,
    urls: [{ label: "GitHub", url: "https://github.com/aquasecurity/tracee" }],
  },
  {
    logoUrl: "https://github.com/cilium/tetragon",
    name: "Tetragon",
    logoName: 'tetragonLogo',
    title: "eBPF-based Security Observability & Runtime Enforcement",
    description: `Tetragon provides eBPF-based transparent security observability
    combined with real-time runtime enforcement. The deep visibility is
    achieved without requiring application changes and is provided at
    low overhead thanks to smart Linux in-kernel filtering and
    aggregation logic built directly into the eBPF-based kernel-level
    collector. The embedded runtime enforcement layer is capable of
    performing access control on kernel functions, system calls and at
    other enforcement levels.`,
    urls: [{ label: "GitHub", url: "https://github.com/cilium/tetragon" }],
  },
  {
    logoUrl: "https://github.com/iovisor/kubectl-trace",
    name: "kubectl trace",
    logoName: 'kubectlTraceLogo',
    title: "Schedule bpftrace programs on your Kubernetes cluster",
    description: `kubectl-trace is a kubectl plugin that allows for scheduling the
    execution of bpftrace(8) programs in Kubernetes clusters.
    kubectl-trace does not require installation of any components
    directly onto a Kubernetes cluster in order to execute bpftrace
    programs. When pointed to a cluster, it schedules a temporary job
    called trace-runner that executes bpftrace.`,
    urls: [
      { label: "GitHub", url: "https://github.com/iovisor/kubectl-trace" },
    ],
  },
  {
    logoUrl: "https://github.com/kinvolk/inspektor-gadget",
    name: "Inspektor Gadget",
    logoName: 'inspektorGadgetLogo',
    title:
      'Introspecting and debugging Kubernetes applications using eBPF "gadgets"',
    description: `Inspektor Gadget is a collection of tools (or gadgets) to
    debug and inspect Kubernetes resources and applications. It manages the
    packaging, deployment and execution of eBPF programs in a Kubernetes
    cluster, including many based on BCC tools, as well as some developed
    specifically for use in Inspektor Gadget. It automatically maps low-level
    kernel primitives to high-level Kubernetes resources, making it easier and
    quicker to find the relevant information.`,
    urls: [
      { label: "GitHub", url: "https://github.com/kinvolk/inspektor-gadget" },
      { label: "Website", url: "https://www.inspektor-gadget.io/" },
    ],
  },
  {
    logoUrl: "https://github.com/solo-io/bumblebee",
    name: "BumbleBee",
    logoName: 'bumblebeeLogo',
    title: "OCI compliant eBPF tooling",
    description: `BumbleBee simplifies building eBPF tools and allows you to package,
    distribute, and run eBPF programs using OCI images. It allows you to
    just focus on the eBPF portion of your code and BumbleBee automates
    away the boilerplate, including the userspace code.`,
    urls: [
      { label: "GitHub", url: "https://github.com/solo-io/bumblebee" },
      { label: "Website", url: "https://bumblebee.io/" },
    ],
  },
  {
    logoUrl: "https://github.com/cilium/pwru",
    name: "pwru",
    logoName: 'pwruLogo',
    title: "eBPF-based Linux kernel network packet tracer",
    description:
      "pwru is an eBPF-based tool for tracing network packets in the Linux kernel with advanced filtering capabilities. It allows fine-grained introspection of kernel state to facilitate debugging network connectivity issues.",
    urls: [{ label: "GitHub", url: "https://github.com/cilium/pwru" }],
  },
  {
    logoUrl: "https://github.com/iovisor/ply",
    name: "ply",
    logoName: 'plyLogo',
    title: "A dynamic tracer for Linux",
    description: `ply is a dynamic tracer for Linux which is built upon eBPF. It has
    been designed with embedded systems in mind, is written in C and all
    that ply needs to run is libc and a modern Linux kernel with eBPF
    support, meaning, it does not depend on LLVM for its program
    generation. It has a C-like syntax for writing scripts and is
    heavily inspired by awk(1) and dtrace(1).`,
    urls: [
      { label: "GitHub", url: "https://github.com/iovisor/ply" },
      { label: "Website", url: "https://wkz.github.io/ply/" },
    ],
  },
  {
    logoUrl: "https://github.com/rubrikinc/wachy",
    name: "wachy",
    logoName: 'wachyLogo',
    title: "UI for interactive eBPF-based userspace performance debugging",
    description: `Wachy is a profiler that uses eBPF to trace arbitrary compiled binaries and functions at runtime. It aims to make eBPF uprobe-based debugging much easier to use by displaying traces in a UI next to the source code, and allowing interactive drilldown analysis.`,
    urls: [
      { label: "GitHub", url: "https://github.com/rubrikinc/wachy" },
      { label: "Website", url: "https://rubrikinc.github.io/wachy/" },
    ],
  },
  {
    logoUrl: "https://github.com/accuknox/KubeArmor",
    name: "KubeArmor",
    logoName: 'kubeArmorLogo',
    title: "Container-aware Runtime Security Enforcement System",
    description: `KubeArmor is a container-aware runtime security enforcement system
    that restricts the behavior (such as process execution, file access,
    networking operation, and resource utilization) of containers at the
    system level, using LSMs and eBPF.`,
    urls: [
      { label: "GitHub", url: "https://github.com/accuknox/KubeArmor" },
      { label: "Website", url: "https://kubearmor.com" },
    ],
  },
  {
    logoUrl: "https://github.com/merbridge/merbridge",
    name: "Merbridge",
    logoName: 'merbridgeLogo',
    title:
      "Use eBPF to speed up your Service Mesh like crossing an Einstein-Rosen Bridge",
    description: `Merbridge is designed to make traffic interception and forwarding more efficient for service mesh. With Merbridge, developers can use eBPF instead of iptables to accelerate their service mesh without any additional operations or code changes. Currently, Merbridge already supports Istio, Linkerd, and Kuma.`,
    urls: [
      { label: "GitHub", url: "https://github.com/merbridge/merbridge" },
      { label: "Website", url: "https://merbridge.io/" },
    ],
  },
  {
    logoUrl: "https://github.com/deepflowys/deepflow",
    name: "DeepFlow",
    logoName: 'deepflowLogo',
    title: "Highly Automated Observability Platform powered by eBPF",
    description: `DeepFlow is a highly automated observability platform built for cloud native developers. Based on eBPF, DeepFlow innovatively implements an automated distributed tracing mechanism: AutoTracing. Microservice processes, service mesh sidecars, and network interfaces along the way are included as tracing spans, for every distributed transaction, without any code instrumentation. DeepFlow can automatically generate golden RED metrics for any process in cloud native environment.`,
    urls: [
      { label: "GitHub", url: "https://github.com/deepflowys/deepflow" },
      { label: "Website", url: "https://deepflow.yunshan.net/community.html" },
    ],
  },
  {
    logoUrl: "https://github.com/Exein-io/pulsar",
    name: "Pulsar",
    logoName: 'pulsarLogo',
    title: "A modular runtime security framework for the IoT",
    description: `Pulsar is an event-driven framework for monitoring the activity
    of Linux devices. It allows you to collect runtime activity events from
    the Linux kernel through its modules and evaluate each event against your own
    set of security policies. Powered by eBPF and written in Rust, Pulsar is
    lightweight and safe by design.`,
    urls: [
      { label: "GitHub", url: "https://github.com/Exein-io/pulsar" },
      { label: "Website", url: "https://pulsar.sh/" },
    ],
  },
  {
    logoUrl: "https://github.com/l3af-project",
    name: "L3AF",
    logoName: 'l3afLogo',
    title: "Complete lifecycle management of eBPF programs",
    description: `L3AF is a platform to launch and manage eBPF programs in distributed
    environments. L3AF empowers users to compose multiple eBPF programs
    together to solve unique problems in different environments. Using
    the APIs provided by L3AF, these eBPF programs can be reconfigured,
    updated, inspected, and reordered on-the-fly. L3AF also provides
    configurable metrics for the eBPF programs it has launched.`,
    urls: [
      { label: "GitHub", url: "https://github.com/l3af-project" },
      { label: "Website", url: "https://l3af.io" },
    ],
  },
  {
    logoUrl: "https://github.com/loxilb-io",
    name: "LoxiLB",
    logoName: 'loxiLBLogo',
    title: "eBPF based cloud-native load-balancer for 5G Edge",
    description: `LoxiLB is an open-source cloud-native "external" service load-balancer for cloud-native 5G/edge workloads written from scratch using eBPF as its core-engine and based on Go Language. LoxiLB turns Kubernetes network load balancing for 5G/Edge services into high speed, flexible and programmable LB services.`,
    urls: [
      { label: "GitHub", url: "https://github.com/loxilb-io" },
      { label: "Website", url: "https://www.loxilb.io/" },
    ],
  },
  {
    logoUrl: "https://github.com/sustainable-computing-io/kepler",
    name: "Kepler",
    logoName: 'keplerLogo',
    title: "Kubernetes-based Efficient Power Level Exporter",
    description: `Kepler (Kubernetes-based Efficient Power Level Exporter) is a Prometheus exporter.
    It uses eBPF to probe CPU performance counters and Linux kernel tracepoints.
    These data and stats from cgroup and sysfs are fed into ML models to estimate energy consumption by Pods.`,
    urls: [
      {
        label: "GitHub",
        url: "https://github.com/sustainable-computing-io/kepler",
      },
      { label: "Website", url: "https://sustainable-computing.io" },
    ],
  },
  {
    logoUrl: "https://skywalking.apache.org/",
    name: "Apache SkyWalking",
    logoName: 'skywalkingLogo',
    title: "APM, Application Performance Monitoring System",
    description: `Apache SkyWalking is an application performance monitor tool for distributed systems,
    especially designed for microservices, cloud native and container-based (Kubernetes) architectures.
    SkyWalking Rover is an agent in the SkyWalking ecosystem, as a metrics collector and profiler
    powered by eBPF to diagnose CPU, I/O and L4/L7(TLS) network performance. Also, Rover provides add-on events for
    spans in the distributed tracing.`,
    urls: [
      { label: "GitHub", url: "https://github.com/apache/skywalking-rover" },
      { label: "Website", url: "https://skywalking.apache.org/" },
    ],
  },
];

export default emergingProjects;