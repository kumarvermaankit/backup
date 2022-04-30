#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Edge
{

public:
    int v, w;

    Edge(int v, int w)
    {
        this->v = v;
        this->w = w;
    }
};

void addEdge(vector<vector<Edge>> graph, int u, int v, int w)
{
    graph[u].push_back(Edge(v, w));
    graph[v].push_back(Edge(u, w));
}

void display(vector<vector<Edge>> graph)
{
    for (int i = 0; i < graph.size(); i++)
    {
        for (int k = 0; k < graph[i].size(); k++)
        {
            cout << i << "->"
                 << "(" << graph[i][k].v << "," << graph[i][k].w << ")" << endl;
        }
    }
}

int FindEdge(vector<vector<Edge>> graph, int u, int v)
{
    for (int i = 0; i < graph[u].size(); i++)
    {
        if (v == graph[u][i].v)
        {
            return i;
        }
    }
    return -1;
}

void removeEdge(vector<vector<Edge>> graph, int u, int v)
{
    int idx = FindEdge(graph, u, v);
    graph[u].erase(graph[u].begin() + idx);
}

void removeVtx(vector<vector<Edge>> graph, int u)
{
    for (int i = 0; i < graph.size(); i++)
    {
        for (int k = graph[i].size() - 1; k >= 0; k--)
        {
            if (graph[i][k].v == u)
            {
                removeEdge(graph, k, u);
            }
        }
    }
}

bool hasPath(vector<vector<Edge>> graph, int src, int dest, bool vis[])
{

    if (src == dest)
    {
        return true;
    }

    bool res = false;
    vis[src] = true;

    for (int i = 0; i < graph[src].size(); i++)
    {
        if (!vis[graph[src][i].v])
        {
            res = res || hasPath(graph, graph[src][i].v, dest, vis);
        }
    }

    return res;
}

bool allPath(vector<vector<Edge>> graph, int src, int dest, bool vis[], string psf)
{

    if (src == dest)
    {
        cout << psf + to_string(dest);
        return 1;
    }

    bool res = false;
    vis[src] = true;
    int count = 0;
    for (int i = 0; i < graph[src].size(); i++)
    {
        if (!vis[graph[src][i].v])
        {
            count += allPath(graph, graph[src][i].v, dest, vis, psf);
        }
    }
    vis[src] = true;
    return count;
}

class Pair_
{
public:
    int weight = 0;
    string psf = "";

    Pair_(int weight, string psf)
    {
        this->weight = weight;
        this->psf = psf;
    }
};

void preOrder(vector<vector<Edge>> graph, int src, bool vis[], int wsf, string psf)
{
    cout << (to_string(src) + "->" + (psf + to_string(src)) + "@" + to_string(wsf));
    vis[src] = true;

    for (Edge e : graph[src])
    {
        if (!vis[e.v])
        {
            preOrder(graph, e.v, vis, wsf, psf);
        }
    }

    vis[src] = false;
}

Pair_ heavypath(vector<vector<Edge>> graph, int src, int dest, bool vis[])
{

    if (src == dest)
    {
        return Pair_(0, to_string(src) + "");
    }

    vis[src] = true;

    Pair_ myans(-1, "");
    for (Edge e : graph[src])
    {
        if (!vis[e.v])
        {
            Pair_ recans = heavypath(graph, e.v, dest, vis);

            if (recans.weight != -1 && recans.weight + e.w > myans.weight)
            {
                myans.weight = recans.weight + e.w;
                myans.psf = myans.psf + to_string(e.v);
            }
        }
    }

    vis[src] = false;
    return myans;
}

void hamintoniancycle(vector<vector<Edge>> graph, int src, bool vis[], int edgeCount, string psf, int osrc, vector<string> ans)
{

    if (edgeCount == graph.size() - 1)
    {
        psf = psf + to_string(src);
        int idx = FindEdge(graph, src, osrc);
        if (idx != -1)
        {
            psf = psf + "*";
        }

        ans.push_back(psf);
        return;
    }

    vis[src] = true;

    for (Edge e : graph[src])
    {
        if (!vis[src])
        {
            hamintoniancycle(graph, e.v, vis, edgeCount + 1, psf + to_string(src), osrc, ans);
        }
    }

    vis[src] = false;
}

void createGraph()
{
    int V = 9;

    vector<vector<Edge>> graph;

    addEdge(graph, 0, 1, 10);
    addEdge(graph, 0, 3, 10);
    addEdge(graph, 1, 2, 10);
    addEdge(graph, 2, 3, 40);
    addEdge(graph, 2, 7, 2);
    addEdge(graph, 2, 8, 4);
    addEdge(graph, 7, 8, 3);
    addEdge(graph, 3, 4, 2);
    addEdge(graph, 4, 5, 2);

    display(graph);
}

int main()
{

    createGraph();

    return 0;
}